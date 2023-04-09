import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionProjetComponent } from './inscription-projet.component';

describe('InscriptionProjetComponent', () => {
  let component: InscriptionProjetComponent;
  let fixture: ComponentFixture<InscriptionProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
