import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MualafatPage } from './mualafat.page';

describe('MualafatPage', () => {
  let component: MualafatPage;
  let fixture: ComponentFixture<MualafatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MualafatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
