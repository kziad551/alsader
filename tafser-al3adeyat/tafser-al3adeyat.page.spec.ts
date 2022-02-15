import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAl3adeyatPage } from './tafser-al3adeyat.page';

describe('TafserAl3adeyatPage', () => {
  let component: TafserAl3adeyatPage;
  let fixture: ComponentFixture<TafserAl3adeyatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAl3adeyatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAl3adeyatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
