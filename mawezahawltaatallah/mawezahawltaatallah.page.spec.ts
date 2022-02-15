import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawezahawltaatallahPage } from './mawezahawltaatallah.page';

describe('MawezahawltaatallahPage', () => {
  let component: MawezahawltaatallahPage;
  let fixture: ComponentFixture<MawezahawltaatallahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawezahawltaatallahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawezahawltaatallahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
