import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokemonResolve } from './pokemons/pokemon.resolve';

const appRoutes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonComponent, resolve: {'pokemon': PokemonResolve} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PokemonResolve
  ]
})
export class AppRoutingModule {}
