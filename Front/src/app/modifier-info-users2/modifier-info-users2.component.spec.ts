import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoUsers2Component } from './modifier-info-users2.component';

describe('ModifierInfoUsers2Component', () => {
  let component: ModifierInfoUsers2Component;
  let fixture: ComponentFixture<ModifierInfoUsers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoUsers2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInfoUsers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
