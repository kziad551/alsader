import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlseraAlzateyaLelsayedPage } from './alsera-alzateya-lelsayed.page';

describe('AlseraAlzateyaLelsayedPage', () => {
  let component: AlseraAlzateyaLelsayedPage;
  let fixture: ComponentFixture<AlseraAlzateyaLelsayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlseraAlzateyaLelsayedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlseraAlzateyaLelsayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
