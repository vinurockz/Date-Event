import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  Events=this.fb.group({
    uid:[''],
    date:[''],
    events:['']
  })


  constructor(private rt:Router,private ds:ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  Eventsfun(){
    var date=this.Events.value.date
    var events=this.Events.value.events
    var uid=this.Events.value.uid
   
        

const result=this.ds.EventAdder(uid,date,events)
if(result){
  alert("Event added successfully")
}
  }

  display(){
    this.rt.navigateByUrl("view")
  }


}
