import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafseralmaedaPage } from './tafseralmaeda.page';

describe('TafseralmaedaPage', () => {
  let component: TafseralmaedaPage;
  let fixture: ComponentFixture<TafseralmaedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafseralmaedaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafseralmaedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
