import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa35Page } from './khotabalsayed-ad3eya-ekraa35.page';

describe('KhotabalsayedAd3eyaEkraa35Page', () => {
  let component: KhotabalsayedAd3eyaEkraa35Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa35Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa35Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa35Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
