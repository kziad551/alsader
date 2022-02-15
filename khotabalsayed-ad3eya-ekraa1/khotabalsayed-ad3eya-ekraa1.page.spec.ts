import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa1Page } from './khotabalsayed-ad3eya-ekraa1.page';

describe('KhotabalsayedAd3eyaEkraa1Page', () => {
  let component: KhotabalsayedAd3eyaEkraa1Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
