import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareUsersComponent } from './modificare-users.component';

describe('ModificareUsersComponent', () => {
  let component: ModificareUsersComponent;
  let fixture: ComponentFixture<ModificareUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificareUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificareUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
