import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp',
  // pure: false
})
export class ExpPipe implements PipeTransform {

  transform(base: number, exponent: number = 2): number {
    return base ** exponent;
  }

}
