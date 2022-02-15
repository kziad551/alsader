import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZel7eja1415Page } from './alusul-zel7eja1415.page';

describe('AlusulZel7eja1415Page', () => {
  let component: AlusulZel7eja1415Page;
  let fixture: ComponentFixture<AlusulZel7eja1415Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZel7eja1415Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZel7eja1415Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
