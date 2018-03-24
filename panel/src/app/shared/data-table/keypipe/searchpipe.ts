import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Search'})
export class SearchPipe implements PipeTransform
{
    transform(items:any[], search:string): any {
        if (items && items.length){
            return items.filter(item =>{
                if (search && item.name.toLowerCase().indexOf(search.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}