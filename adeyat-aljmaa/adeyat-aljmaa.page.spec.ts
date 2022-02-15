import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeyatAljmaaPage } from './adeyat-aljmaa.page';

describe('AdeyatAljmaaPage', () => {
  let component: AdeyatAljmaaPage;
  let fixture: ComponentFixture<AdeyatAljmaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeyatAljmaaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeyatAljmaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
