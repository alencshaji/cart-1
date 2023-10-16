import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(categoryId: number): string {
    switch (categoryId) {
      case 1:
        return 'Game PC';
      case 2:
        return 'Games';
      case 3:
        return 'Headset';
      default:
        return 'Unknown';
    }
  }

}
