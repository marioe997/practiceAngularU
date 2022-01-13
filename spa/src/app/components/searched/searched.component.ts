import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html'
})
export class SearchedComponent implements OnInit {

  heroe:any = {};
  termino:string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroService: HeroesService,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe( params => {
      this.termino = params ['termino'];
      this.heroe = this._heroService.searchHero(params ['termino']);
    })
  }


}
