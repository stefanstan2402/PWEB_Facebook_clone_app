import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPostariComponent } from './modifica-postari.component';

describe('ModificaPostariComponent', () => {
  let component: ModificaPostariComponent;
  let fixture: ComponentFixture<ModificaPostariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPostariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaPostariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
