import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserNaba2Page } from './tafser-naba2.page';

describe('TafserNaba2Page', () => {
  let component: TafserNaba2Page;
  let fixture: ComponentFixture<TafserNaba2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserNaba2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserNaba2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
