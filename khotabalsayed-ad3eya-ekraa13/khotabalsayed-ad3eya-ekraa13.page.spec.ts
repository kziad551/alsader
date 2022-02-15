import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa13Page } from './khotabalsayed-ad3eya-ekraa13.page';

describe('KhotabalsayedAd3eyaEkraa13Page', () => {
  let component: KhotabalsayedAd3eyaEkraa13Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
