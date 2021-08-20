import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit {
  slides = [{
    "name": 'slide1',
    "bgColor": 'red',
    "image": ''
  },
  {
    "name": 'slide1',
    "bgColor": 'blue',
    "image": ''
  }, {
    "name": 'slide1',
    "bgColor": 'green',
    "image": ''
  }, {
    "name": 'slide1',
    "bgColor": 'purple',
    "image": ''
  }, {
    "name": 'slide1',
    "bgColor": 'pink',
    "image": ''
  }]

  sketches = [{
    "image": 'pdt2.jpg'
  },
  {
    "image": 'pdt3.jpg'
  }, {
    "image": 'pdt4.jpg'
  }, {
    "image": 'pdt5.jpg'
  }, {
    "image": 'pdt6.jpg'
  }]

  drawings = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.container.data.length > 0) {
         if(event.container.data.some(item => item['name'] === 'slide1')) {
           if(event.previousContainer.data[event.previousIndex]['image']) {
            if(event.container.data[event.currentIndex] !== undefined) {
              event.container.data[event.currentIndex]['image'] =  event.previousContainer.data[event.previousIndex]['image'];
            }
          } else {
             copyArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);
           }
         }
    } else {
      if(event.previousContainer.data[event.previousIndex]['image']) {
        return
      } else {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }


  }
}
