import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlshare7Page } from './tafser-alshare7.page';

describe('TafserAlshare7Page', () => {
  let component: TafserAlshare7Page;
  let fixture: ComponentFixture<TafserAlshare7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlshare7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlshare7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
