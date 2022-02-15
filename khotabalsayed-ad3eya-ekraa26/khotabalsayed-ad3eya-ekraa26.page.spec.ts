import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa26Page } from './khotabalsayed-ad3eya-ekraa26.page';

describe('KhotabalsayedAd3eyaEkraa26Page', () => {
  let component: KhotabalsayedAd3eyaEkraa26Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa26Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
