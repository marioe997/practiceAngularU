import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { SearchedComponent } from './components/searched/searched.component';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'search/:termino', component: SearchedComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const ROUTING = RouterModule.forRoot(ROUTES);
