import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEtudiantComponent } from './nav-bar-etudiant.component';

describe('NavBarEtudiantComponent', () => {
  let component: NavBarEtudiantComponent;
  let fixture: ComponentFixture<NavBarEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
