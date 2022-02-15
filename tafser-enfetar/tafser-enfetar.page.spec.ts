import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserEnfetarPage } from './tafser-enfetar.page';

describe('TafserEnfetarPage', () => {
  let component: TafserEnfetarPage;
  let fixture: ComponentFixture<TafserEnfetarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserEnfetarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserEnfetarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
