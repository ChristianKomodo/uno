import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uno';
  numbers: number[] = [1,2,3,4,5,6,7,8,9];
  otherNumbers: number[] = [1,2,3,4,5,6,7,8,9];

  drop(event: CdkDragDrop<number[]>) {
    if(event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
