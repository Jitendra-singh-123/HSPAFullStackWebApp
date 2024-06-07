import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  debugger;
  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || value.length === 0 || !filterString || !propName) {
      return value;
    }
    return value.filter(item => item[propName].toLocaleLowerCase() === filterString.toLocaleLowerCase());
  }

}
