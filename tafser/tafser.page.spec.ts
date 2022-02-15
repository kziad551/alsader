import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserPage } from './tafser.page';

describe('TafserPage', () => {
  let component: TafserPage;
  let fixture: ComponentFixture<TafserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
