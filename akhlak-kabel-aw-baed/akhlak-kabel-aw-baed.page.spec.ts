import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkhlakKabelAwBaedPage } from './akhlak-kabel-aw-baed.page';

describe('AkhlakKabelAwBaedPage', () => {
  let component: AkhlakKabelAwBaedPage;
  let fixture: ComponentFixture<AkhlakKabelAwBaedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkhlakKabelAwBaedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkhlakKabelAwBaedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
