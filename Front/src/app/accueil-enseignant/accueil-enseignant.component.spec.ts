import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEnseignantComponent } from './accueil-enseignant.component';

describe('AccueilEnseignantComponent', () => {
  let component: AccueilEnseignantComponent;
  let fixture: ComponentFixture<AccueilEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
