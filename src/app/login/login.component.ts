import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  head="Event Reminder"

  logs=this.fb.group({
    uid:[''],
    pswd:['']
  })



  constructor(private fb:FormBuilder,private ds:ServiceService, private rt:Router) { }

  ngOnInit(): void {
  }
login(){
  var uid=this.logs.value.uid
  var pswd=this.logs.value.pswd

  if(this.logs.valid){
    const result=this.ds.Login_user(uid,pswd)
    if(result){
      alert("sucessful login")
      this.rt.navigateByUrl("dash")
    }
    else{
      alert("enter valid details for login")
    }
  }
}

regi(){
  this.rt.navigateByUrl('regis')
}

}
