import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhotabmaktubaPage } from './khotabmaktuba.page';

describe('KhotabmaktubaPage', () => {
  let component: KhotabmaktubaPage;
  let fixture: ComponentFixture<KhotabmaktubaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabmaktubaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhotabmaktubaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
