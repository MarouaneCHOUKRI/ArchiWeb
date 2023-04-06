import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEtudiantComponent } from './accueil-etudiant.component';

describe('AccueilEtudiantComponent', () => {
  let component: AccueilEtudiantComponent;
  let fixture: ComponentFixture<AccueilEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
