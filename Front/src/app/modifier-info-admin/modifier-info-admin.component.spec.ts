import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoAdminComponent } from './modifier-info-admin.component';

describe('ModifierInfoAdminComponent', () => {
  let component: ModifierInfoAdminComponent;
  let fixture: ComponentFixture<ModifierInfoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInfoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
