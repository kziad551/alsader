import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa8Page } from './khotabalsayed-ad3eya-ekraa8.page';

describe('KhotabalsayedAd3eyaEkraa8Page', () => {
  let component: KhotabalsayedAd3eyaEkraa8Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
