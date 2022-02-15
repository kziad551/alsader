import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa31Page } from './khotabalsayed-ad3eya-ekraa31.page';

describe('KhotabalsayedAd3eyaEkraa31Page', () => {
  let component: KhotabalsayedAd3eyaEkraa31Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
