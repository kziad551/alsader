import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkhlakKabelEsteshhadPage } from './akhlak-kabel-esteshhad.page';

describe('AkhlakKabelEsteshhadPage', () => {
  let component: AkhlakKabelEsteshhadPage;
  let fixture: ComponentFixture<AkhlakKabelEsteshhadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkhlakKabelEsteshhadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkhlakKabelEsteshhadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
