import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabelBaedEsteshhadPage } from './kabel-baed-esteshhad.page';

describe('KabelBaedEsteshhadPage', () => {
  let component: KabelBaedEsteshhadPage;
  let fixture: ComponentFixture<KabelBaedEsteshhadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabelBaedEsteshhadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabelBaedEsteshhadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
