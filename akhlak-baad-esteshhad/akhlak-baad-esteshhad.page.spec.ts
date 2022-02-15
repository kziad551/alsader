import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkhlakBaadEsteshhadPage } from './akhlak-baad-esteshhad.page';

describe('AkhlakBaadEsteshhadPage', () => {
  let component: AkhlakBaadEsteshhadPage;
  let fixture: ComponentFixture<AkhlakBaadEsteshhadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkhlakBaadEsteshhadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkhlakBaadEsteshhadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
