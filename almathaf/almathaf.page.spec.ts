import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmathafPage } from './almathaf.page';

describe('AlmathafPage', () => {
  let component: AlmathafPage;
  let fixture: ComponentFixture<AlmathafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmathafPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmathafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
