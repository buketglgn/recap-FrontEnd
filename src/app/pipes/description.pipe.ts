import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    
    filterText = filterText ? filterText.toLocaleLowerCase():""
    return filterText ? value.filter(
      (p:Car)=>p.description.toLocaleLowerCase().indexOf(filterText)!==-1) : value;
  }

}
