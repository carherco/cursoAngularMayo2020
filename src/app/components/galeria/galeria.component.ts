import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  // imagenes: Array<string>
  imagenes: string[] = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];

  indiceActual: number;
  imagenSeleccionada: string;
  tamanyo = 250;

  isPlaying = false;

  private intervalId;

  constructor() {
    this.indiceActual = 0;
    this.imagenSeleccionada = this.imagenes[this.indiceActual];
  }

  ngOnInit(): void {
  }

  anteriorImagen() {
    this.indiceActual -= 1;
    this.imagenSeleccionada = this.imagenes[this.indiceActual];
  }

  siguienteImagen() {
    this.indiceActual += 1;
    if (this.indiceActual === this.imagenes.length) {
      this.indiceActual = 0;
    }
    this.imagenSeleccionada = this.imagenes[this.indiceActual];
  }

  seleccionarImagen(indice: number) {
    this.indiceActual = indice;
    this.imagenSeleccionada = this.imagenes[this.indiceActual];
  }

  play() {
    this.intervalId = setInterval( () => { this.siguienteImagen(); }, 1000);
    this.isPlaying = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isPlaying = false;
  }

}
