import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTane1417Page } from './alusul-jamade-tane1417.page';

describe('AlusulJamadeTane1417Page', () => {
  let component: AlusulJamadeTane1417Page;
  let fixture: ComponentFixture<AlusulJamadeTane1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeTane1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeTane1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
