import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNavComponent } from './pokemon-nav.component';

describe('PokemonNavComponent', () => {
  let component: PokemonNavComponent;
  let fixture: ComponentFixture<PokemonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
