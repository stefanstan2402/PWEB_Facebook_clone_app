import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareCommentsComponent } from './modificare-comments.component';

describe('ModificareCommentsComponent', () => {
  let component: ModificareCommentsComponent;
  let fixture: ComponentFixture<ModificareCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificareCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificareCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
