import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from './client.model';
import { Title } from '@angular/platform-browser';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  
   
  
constructor(private http:HttpClient){}
onsend(postData){
  this.http.post('',postData).subscribe(responseData =>{
    console.log(responseData);
  });
}

onsubmit(form: NgForm){
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
 
 return this.http.post('http://localhost:3000/',form.value.nom,httpOptions).subscribe();


}

}

