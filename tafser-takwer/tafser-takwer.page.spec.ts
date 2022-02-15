import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserTakwerPage } from './tafser-takwer.page';

describe('TafserTakwerPage', () => {
  let component: TafserTakwerPage;
  let fixture: ComponentFixture<TafserTakwerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserTakwerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserTakwerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
