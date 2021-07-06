import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  datesdata:any ={2021:{name:"vineeth",id:2021,pswd:"2021",dateevt:[]},
                  2022:{name:"vinu",id:2022,pswd:"2022",dateevt:[]},
                }
currentuser:any
username:any

  constructor() {
    this.getdetails()
   }

  savedetailes(){
    localStorage.setItem('datesdata',JSON.stringify(this.datesdata))
    if(this.username){
    localStorage.setItem('username',JSON.stringify(this.username))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }

  }

  getdetails(){
    if (localStorage.getItem('datesdata')){
      this.datesdata=JSON.parse(localStorage.getItem('datesdata') || '')
    }
    if(localStorage.getItem('username')){
      this.username=JSON.parse(localStorage.getItem('username') || '')
    }
    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
    }
  }
  dispeve(){

    return this.datesdata[this.currentuser].dateevt;
  }

  Login_user(id:any,pswd:any){
    let database=this.datesdata
    if(id in database){
      if(pswd==database[id]["pswd"]){
        this.username=this.datesdata[id]['name']
        this.currentuser=id
        this.savedetailes()
        return true;
    }
    else{
      
      alert("password incorrect")
      return false;
    }
  }
    else{
      
      alert("wrong user-id")
      return false;
    }
}

register_user(name:any,id:any,pswd:any){
  let database=this.datesdata;
  if(id in database){
    return false;
  }
  else{
    this.datesdata[id]={
      name,
      id,
      pswd
    }
    this.savedetailes()
    return true;
  }

}



EventAdder(uid:any,eventdate:any,events:any){
  let datas=this.datesdata;
  if(uid in datas){
    datas[uid].dateevt.push({
      edate:eventdate,
      eevnt:events

    })
    this.savedetailes()
    return true;
  }
  else{
    return false;
  }
    
}

}