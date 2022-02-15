import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAltenPage } from './tafser-alten.page';

describe('TafserAltenPage', () => {
  let component: TafserAltenPage;
  let fixture: ComponentFixture<TafserAltenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAltenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAltenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
