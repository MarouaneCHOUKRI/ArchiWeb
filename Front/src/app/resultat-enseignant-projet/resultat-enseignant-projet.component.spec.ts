import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatEnseignantProjetComponent } from './resultat-enseignant-projet.component';

describe('ResultatEnseignantProjetComponent', () => {
  let component: ResultatEnseignantProjetComponent;
  let fixture: ComponentFixture<ResultatEnseignantProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatEnseignantProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatEnseignantProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
