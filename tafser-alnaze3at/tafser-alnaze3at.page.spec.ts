import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlnaze3atPage } from './tafser-alnaze3at.page';

describe('TafserAlnaze3atPage', () => {
  let component: TafserAlnaze3atPage;
  let fixture: ComponentFixture<TafserAlnaze3atPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlnaze3atPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlnaze3atPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
