import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRabe3Altane1419Page } from './alusul-rabe3-altane1419.page';

describe('AlusulRabe3Altane1419Page', () => {
  let component: AlusulRabe3Altane1419Page;
  let fixture: ComponentFixture<AlusulRabe3Altane1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRabe3Altane1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRabe3Altane1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
