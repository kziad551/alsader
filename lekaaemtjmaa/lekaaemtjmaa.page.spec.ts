import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekaaemtjmaaPage } from './lekaaemtjmaa.page';

describe('LekaaemtjmaaPage', () => {
  let component: LekaaemtjmaaPage;
  let fixture: ComponentFixture<LekaaemtjmaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaemtjmaaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekaaemtjmaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
