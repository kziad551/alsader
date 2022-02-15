import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedLatmeyatPage } from './khotabalsayed-latmeyat.page';

describe('KhotabalsayedLatmeyatPage', () => {
  let component: KhotabalsayedLatmeyatPage;
  let fixture: ComponentFixture<KhotabalsayedLatmeyatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedLatmeyatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedLatmeyatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
