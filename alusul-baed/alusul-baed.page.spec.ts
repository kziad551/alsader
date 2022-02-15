import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlusulBaedPage } from './alusul-baed.page';

describe('AlusulBaedPage', () => {
  let component: AlusulBaedPage;
  let fixture: ComponentFixture<AlusulBaedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulBaedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlusulBaedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
