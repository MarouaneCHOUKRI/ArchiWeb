import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilUtilisateurComponent } from './nav-bar.component';

describe('AccueilUtilisateurComponent', () => {
  let component: AccueilUtilisateurComponent;
  let fixture: ComponentFixture<AccueilUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
