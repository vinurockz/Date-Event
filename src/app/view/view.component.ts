import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  allevents:any=[];

  constructor(private ds:ServiceService) { 
    this.allevents=ds.dispeve();
    console.log(this.allevents);
  }
  
  
    
    

  ngOnInit(): void {
  }

}
