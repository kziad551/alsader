import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserBasmalaPage } from './tafser-basmala.page';

describe('TafserBasmalaPage', () => {
  let component: TafserBasmalaPage;
  let fixture: ComponentFixture<TafserBasmalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserBasmalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserBasmalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
