import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekamajltalhudaPage } from './lekamajltalhuda.page';

describe('LekamajltalhudaPage', () => {
  let component: LekamajltalhudaPage;
  let fixture: ComponentFixture<LekamajltalhudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekamajltalhudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekamajltalhudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
