import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTane1418Page } from './alusul-jamade-tane1418.page';

describe('AlusulJamadeTane1418Page', () => {
  let component: AlusulJamadeTane1418Page;
  let fixture: ComponentFixture<AlusulJamadeTane1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeTane1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeTane1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
