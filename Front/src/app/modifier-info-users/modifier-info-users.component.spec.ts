import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoUsersComponent } from './modifier-info-users.component';

describe('ModifierInfoUsersComponent', () => {
  let component: ModifierInfoUsersComponent;
  let fixture: ComponentFixture<ModifierInfoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInfoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
