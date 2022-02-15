import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserBurujPage } from './tafser-buruj.page';

describe('TafserBurujPage', () => {
  let component: TafserBurujPage;
  let fixture: ComponentFixture<TafserBurujPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserBurujPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserBurujPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
