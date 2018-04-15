import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-via',
  templateUrl: './via.component.html',
  styleUrls: ['./via.component.scss']
})

export class ViaComponent implements OnInit {

  initial_input: string = "Input to API."
  initial_output: string = "Output from API"

	user_input: string;
  server_output: string;
  url = `http://localhost:8000`

  constructor(private http: Http) { 
    this.user_input = ""
    this.server_output = ""
  }

  ngOnInit() {
  }

  doPOST(){
    console.log("I'm POSTing");
    if (this.user_input.length > 0) {
      this.http.post(this.url, {input:this.user_input}).subscribe(res => (this.server_output  = res.json()['response']));
    } else {
      this.user_input = ""
      this.server_output = ""
    }
      
  }

}
