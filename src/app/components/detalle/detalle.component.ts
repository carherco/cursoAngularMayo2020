import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    // No puedo borrar el user porque no tengo acceso al array
    // Pero puedo emitir el evento deleteEvent para que el master borre el user
    this.deleteEvent.emit(this.user);
    // this.deleteEvent.next(); // Sinónimo de emit()
  }

}
