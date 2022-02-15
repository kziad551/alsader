import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnajlaynAlshahedaynPage } from './alnajlayn-alshahedayn.page';

describe('AlnajlaynAlshahedaynPage', () => {
  let component: AlnajlaynAlshahedaynPage;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlnajlaynAlshahedaynPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
