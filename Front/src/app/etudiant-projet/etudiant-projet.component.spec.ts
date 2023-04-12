import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantProjetComponent } from './etudiant-projet.component';

describe('EtudiantProjetComponent', () => {
  let component: EtudiantProjetComponent;
  let fixture: ComponentFixture<EtudiantProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
