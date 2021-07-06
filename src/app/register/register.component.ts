import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regis=this.fb.group({
    usrname:[''],
    usrid:[''],
    pswd:['']
  })
  

  constructor(private rt:Router, private ds:ServiceService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var usrname=this.regis.value.usrname
    var usrid=this.regis.value.usrid
    var pswd=this.regis.value.pswd
    
    if(this.regis.valid){
    const result=this.ds.register_user(usrname,usrid,pswd)
    if(result){
      this.rt.navigateByUrl('')
      alert("Sucessful Registered");
    
    }
    else{
      alert("details enter is wrong")
        }
    
                          }
    
    
              }
    


}
