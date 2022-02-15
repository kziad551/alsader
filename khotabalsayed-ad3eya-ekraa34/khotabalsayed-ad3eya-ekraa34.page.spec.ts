import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa34Page } from './khotabalsayed-ad3eya-ekraa34.page';

describe('KhotabalsayedAd3eyaEkraa34Page', () => {
  let component: KhotabalsayedAd3eyaEkraa34Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa34Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
