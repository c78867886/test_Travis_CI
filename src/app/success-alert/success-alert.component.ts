import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  text: string = '';
  text2: string = '';

  constructor() { }

  ngOnInit() {
  }

  test() {
    this.text = 'init';
  }

}
