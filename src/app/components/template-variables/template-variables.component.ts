import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  @ViewChild('box', { static: true })
  value: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.value.nativeElement.value);
  }

}
