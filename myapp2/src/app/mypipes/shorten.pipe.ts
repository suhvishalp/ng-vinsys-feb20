import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    
    transform(value: any) {
       return value.substring(0,20) + '...';
    }

}