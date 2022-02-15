import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaktabatAlsayedPage } from './maktabat-alsayed.page';

describe('MaktabatAlsayedPage', () => {
  let component: MaktabatAlsayedPage;
  let fixture: ComponentFixture<MaktabatAlsayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaktabatAlsayedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaktabatAlsayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
