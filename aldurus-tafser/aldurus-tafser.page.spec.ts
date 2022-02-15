import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AldurusTafserPage } from './aldurus-tafser.page';

describe('AldurusTafserPage', () => {
  let component: AldurusTafserPage;
  let fixture: ComponentFixture<AldurusTafserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AldurusTafserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AldurusTafserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
