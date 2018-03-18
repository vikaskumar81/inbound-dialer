import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})

export class BreadCrumbsComponent implements OnInit{
    @Input() heading: string;
    @Input() icon: string;

    constructor() { }

    ngOnInit() {}
}
