import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa27Page } from './khotabalsayed-ad3eya-ekraa27.page';

describe('KhotabalsayedAd3eyaEkraa27Page', () => {
  let component: KhotabalsayedAd3eyaEkraa27Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa27Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
