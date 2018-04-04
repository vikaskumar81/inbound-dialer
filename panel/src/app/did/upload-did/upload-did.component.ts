import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { DidService } from '../did.service';
import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { DIDForm , DID} from '../model/model.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { MatSelect } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { Http, Response } from '@angular/http';

const URL = 'http://72.249.184.208:3010/did';


@Component({
  selector: 'app-upload-did',
  templateUrl: './upload-did.component.html',
  styleUrls: ['./upload-did.component.css']
})
export class UploadDidComponent  extends AppComponentClass<DID, DIDForm> {

    queue : Option[];
  foundqueue: boolean;
  supplier : Option[];
  foundsupplier : boolean;
  didprovider : Option[];
  founddidprovider : boolean;
  customer : Option[];
  foundcustomer : boolean;
 

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'filename'});
  
  constructor(protected data: DidService,  protected router: Router,private el: ElementRef, private http: Http,protected fb: FormBuilder) { 
    super(data, router,fb);
    this.nav='/main/did/list-did';
    this.cdata=new DIDForm(null);
  }

  ngOnInit() {
    super.ngOnInit();

    this.data.getSupplier().subscribe(
        data => {
          if(data.length>0)
          {
            this.foundsupplier=true;
            this.supplier=data;
          }
      });

      this.data.getCustomer().subscribe(
        data => {
          if(data.length>0)
          {
            this.foundcustomer=true;
            this.customer=data;
          }
      });

      this.data.getQueue().subscribe(
        data => {
          if(data.length>0)
          {
            this.foundqueue=true;
            this.queue=data;
          }
      });
   //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
   //overide the onCompleteItem property of the uploader so we are 
   //able to deal with the server response.
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
           console.log("ImageUpload:uploaded:", item, status, response);
       };
   }

   onSubmit()
   {
     super.onSubmit();
     this.upload();
   }

   upload() {
     //locate the file element meant for the file upload.
         let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#filename');
     //get the total amount of files attached to the file input.
         let fileCount: number = inputEl.files.length;
     //create a new fromdata instance
         let formData = new FormData();
     //check if the filecount is greater than zero, to be sure a file was selected.
         if (fileCount > 0) { // a file was selected
             //append the key name 'photo' with the first file in the element
                 formData.append('filename', inputEl.files.item(0));
             //call the angular http method
             this.http
         //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                 .post(URL, formData).map((res:Response) => res.json()).subscribe(
                 //map the success function and alert the response
                  (success) => {
                         console.log(success._body);
                 },
                 (error) => console.log(error))
           }
        }
}