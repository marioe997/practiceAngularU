import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() heroSeleccionado: EventEmitter<number>;

  constructor(
    private router:Router
  ) { 
    this.heroSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe( idx:number ){
    // console.log(this.index)
    this.router.navigate(['/heroe', idx])
    // this.heroSeleccionado.emit(this.index)
  }

}
