import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedHetafatPage } from './khotabalsayed-hetafat.page';

describe('KhotabalsayedHetafatPage', () => {
  let component: KhotabalsayedHetafatPage;
  let fixture: ComponentFixture<KhotabalsayedHetafatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedHetafatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedHetafatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
