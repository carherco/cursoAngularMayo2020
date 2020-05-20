import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipe',
  templateUrl: './ejemplo-pipe.component.html',
  styleUrls: ['./ejemplo-pipe.component.css']
})
export class EjemploPipeComponent implements OnInit {

  num1 = 13.5398;
  num2 = 0.174;

  base = 3;
  exponente = 4;

  constructor() { }

  ngOnInit(): void {
  }

  calcularExponente(base, exponente) {
    return base ** exponente;

  }

}
