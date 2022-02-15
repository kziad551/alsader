import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa41Page } from './khotabalsayed-ad3eya-ekraa41.page';

describe('KhotabalsayedAd3eyaEkraa41Page', () => {
  let component: KhotabalsayedAd3eyaEkraa41Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa41Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa41Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
