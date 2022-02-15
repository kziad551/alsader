import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhotabJmaaVideoPage } from './khotab-jmaa-video.page';

describe('KhotabJmaaVideoPage', () => {
  let component: KhotabJmaaVideoPage;
  let fixture: ComponentFixture<KhotabJmaaVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabJmaaVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhotabJmaaVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
