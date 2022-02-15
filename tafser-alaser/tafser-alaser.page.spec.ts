import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlaserPage } from './tafser-alaser.page';

describe('TafserAlaserPage', () => {
  let component: TafserAlaserPage;
  let fixture: ComponentFixture<TafserAlaserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlaserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlaserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
