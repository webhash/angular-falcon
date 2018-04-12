import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-via',
  templateUrl: './via.component.html',
  styleUrls: ['./via.component.scss']
})
export class ViaComponent implements OnInit {

  initial_input: string = "Enter the request here!"
  initial_output: string = "And we will show the response"

	user_input: string;
	server_output: string;

  constructor() { 
    this.user_input = ""
    this.server_output = ""
  }

  ngOnInit() {
  }

  doPOST(){
    console.log("POST");
    if (this.user_input.length > 0) {
      this.server_output = "{{" + this.user_input + "}}"
    } else {
      this.user_input = this.initial_input
      this.server_output = this.initial_output
    }
      
  }

}
