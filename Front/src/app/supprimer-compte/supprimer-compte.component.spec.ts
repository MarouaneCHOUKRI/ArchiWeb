import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCompteComponent } from './supprimer-compte.component';

describe('SupprimerCompteComponent', () => {
  let component: SupprimerCompteComponent;
  let fixture: ComponentFixture<SupprimerCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
