import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform
{
    transform(value:any, field:string[]): any {
        let keys:any[] = [];
        for (let key in value) {
            if(field.indexOf(key)!=-1)
                keys.push({key: key, value: value[key]});
        }
        let ret:any[]=[];
        for(var i=0; i<field.length; i++)
        {
            for(var j=0; j<keys.length; j++)
            {
                if(keys[j]["key"]==field[i])
                {
                    ret.push(keys[j]);
                    continue;
                }
            }
        }
        return ret;
    }
}
