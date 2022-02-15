import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MualafatNotePage } from './mualafat-note.page';

describe('MualafatNotePage', () => {
  let component: MualafatNotePage;
  let fixture: ComponentFixture<MualafatNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatNotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MualafatNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
