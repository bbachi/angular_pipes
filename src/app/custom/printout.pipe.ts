import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printout',
})
export class PrintoutPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    let returnStr = '';
    if (value.length > 0) {
      value.forEach(val => {
        returnStr = returnStr + ' ' + val;
      });
    }
    return returnStr;
  }
}
