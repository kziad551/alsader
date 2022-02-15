import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedSuwarPage } from './khotabalsayed-suwar.page';

describe('KhotabalsayedSuwarPage', () => {
  let component: KhotabalsayedSuwarPage;
  let fixture: ComponentFixture<KhotabalsayedSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
