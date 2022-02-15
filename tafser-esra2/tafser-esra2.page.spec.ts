import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserEsra2Page } from './tafser-esra2.page';

describe('TafserEsra2Page', () => {
  let component: TafserEsra2Page;
  let fixture: ComponentFixture<TafserEsra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserEsra2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserEsra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
