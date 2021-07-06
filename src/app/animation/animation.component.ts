import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('upDown',[
      state('up',style({
        position:'absolute',
        
        top:'-100px'
      })),
      state('down',style({
         top:'100px'
      })),
      state('left',style({
       left:'-200px',
      })),
      state('right',style({
        left:'200px',
      })),
      transition('up=>down',[
        animate('2s')
      ]),
      transition('down=>up',[
        animate('2s')
      ]),
      transition('left=>right',[
        animate('2s')
      ]),
      transition('right=>left',[
        animate('2s')
      ])
    ]),
    
    ]
})
export class AnimationComponent implements OnInit {
  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=! this.isOpen;
  }
}
