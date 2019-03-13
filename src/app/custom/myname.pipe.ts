import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myname'
})
export class MynamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'My Name is: ' + value;
  }

}
