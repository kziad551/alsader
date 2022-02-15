import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRabe3Altane1418Page } from './alusul-rabe3-altane1418.page';

describe('AlusulRabe3Altane1418Page', () => {
  let component: AlusulRabe3Altane1418Page;
  let fixture: ComponentFixture<AlusulRabe3Altane1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRabe3Altane1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRabe3Altane1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
