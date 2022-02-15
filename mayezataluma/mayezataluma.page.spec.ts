import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayezatalumaPage } from './mayezataluma.page';

describe('MayezatalumaPage', () => {
  let component: MayezatalumaPage;
  let fixture: ComponentFixture<MayezatalumaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayezatalumaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayezatalumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
