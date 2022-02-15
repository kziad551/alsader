import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Makat3KhasaLelsayedPage } from './makat3-khasa-lelsayed.page';

describe('Makat3KhasaLelsayedPage', () => {
  let component: Makat3KhasaLelsayedPage;
  let fixture: ComponentFixture<Makat3KhasaLelsayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Makat3KhasaLelsayedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Makat3KhasaLelsayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
