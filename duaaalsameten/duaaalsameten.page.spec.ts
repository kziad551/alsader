import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaaalsametenPage } from './duaaalsameten.page';

describe('DuaaalsametenPage', () => {
  let component: DuaaalsametenPage;
  let fixture: ComponentFixture<DuaaalsametenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuaaalsametenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuaaalsametenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
