import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  
  transform(value: any[], sortField: string, sortOrder: string ): any[] {
    if (!value || value.length === 0 || !sortField) {
      return value;
    }

    return value.sort((a: any, b: any) => {
      let comparison = 0;
      if (a[sortField] < b[sortField]) {
        comparison = -1;
      } else if (a[sortField] > b[sortField]) {
        comparison = 1;
      }

      return sortOrder === 'desc' ? comparison * -1 : comparison;
    });
  }

}
