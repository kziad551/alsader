import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa38Page } from './khotabalsayed-ad3eya-ekraa38.page';

describe('KhotabalsayedAd3eyaEkraa38Page', () => {
  let component: KhotabalsayedAd3eyaEkraa38Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa38Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa38Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
