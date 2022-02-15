import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa45Page } from './khotabalsayed-ad3eya-ekraa45.page';

describe('KhotabalsayedAd3eyaEkraa45Page', () => {
  let component: KhotabalsayedAd3eyaEkraa45Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa45Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa45Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
