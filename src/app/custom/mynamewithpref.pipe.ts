import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mynamewithpref'
})
export class MynamewithprefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let returnStr = 'My Name is: ' + value;
    if (args) {
      returnStr = args === 'upper' ? returnStr.toUpperCase() : args === 'lower' ? returnStr.toLowerCase() : returnStr;
    }
    return returnStr;
  }

}
