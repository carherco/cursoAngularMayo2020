import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name = 'Carlos';
  apellido = 'Herrera';
  claseDinamica = 'header';
  miColor = 'blue';

  constructor() {

    setTimeout( () => { this.name = 'Pedro'; } , 5000);
  }

  ngOnInit(): void {
  }

  nombreCompleto() {
    return this.name + ' ' + this.apellido;
  }

  cambiarNombre(evento) {
    console.log(evento);
    this.name = 'María';
  }

  onKeyUp(evento) {
    console.log(evento);
    this.name = evento.target.value;
  }

  onKeyUp2(value) {
    this.name = value;
  }

}
