import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEnseignantComponent } from './nav-bar-enseignant.component';

describe('NavBarEnseignantComponent', () => {
  let component: NavBarEnseignantComponent;
  let fixture: ComponentFixture<NavBarEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
