import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlfelPage } from './tafser-alfel.page';

describe('TafserAlfelPage', () => {
  let component: TafserAlfelPage;
  let fixture: ComponentFixture<TafserAlfelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlfelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlfelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
