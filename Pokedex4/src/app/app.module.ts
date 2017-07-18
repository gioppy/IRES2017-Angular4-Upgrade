import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonCardComponent } from './pokemons/pokemon-card/pokemon-card.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PokemonService } from './shared/pokemon.service';
import { HttpModule } from '@angular/http';
import { CryComponent } from './pokemons/cry/cry.component';
import { AbilityComponent } from './pokemons/ability/ability.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { TypeService } from './shared/type.service';
import { TypeComponent } from './pokemons/type/type.component';
import { WeaknessComponent } from './pokemons/weakness/weakness.component';
import { MoveTableComponent } from './pokemons/move-table/move-table.component';
import { PokemonNavComponent } from './pokemons/pokemon-nav/pokemon-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonCardComponent,
    PokemonComponent,
    HeaderBarComponent,
    CryComponent,
    AbilityComponent,
    AccordionComponent,
    AccordionItemComponent,
    TypeComponent,
    WeaknessComponent,
    MoveTableComponent,
    PokemonNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TypeService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
