import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaBu7usPage } from './mawsua-bu7us.page';

describe('MawsuaBu7usPage', () => {
  let component: MawsuaBu7usPage;
  let fixture: ComponentFixture<MawsuaBu7usPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaBu7usPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaBu7usPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
