import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit  {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
    ) {

   }

   ngOnInit(){

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes) 

   }

  searchHero(termino:string){
    let herosArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0 ){
        herosArr.push(heroe)
      }

    }
    return herosArr;

  }

  verHeroe( idx:number ){
    this.router.navigate(['/heroe', idx])
  }

}
