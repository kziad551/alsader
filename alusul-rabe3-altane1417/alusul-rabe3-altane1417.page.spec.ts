import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRabe3Altane1417Page } from './alusul-rabe3-altane1417.page';

describe('AlusulRabe3Altane1417Page', () => {
  let component: AlusulRabe3Altane1417Page;
  let fixture: ComponentFixture<AlusulRabe3Altane1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRabe3Altane1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRabe3Altane1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
