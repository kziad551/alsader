import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AldurusPage } from './aldurus.page';

describe('AldurusPage', () => {
  let component: AldurusPage;
  let fixture: ComponentFixture<AldurusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AldurusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AldurusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
