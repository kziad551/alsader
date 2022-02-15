import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BahesJmaaPage } from './bahes-jmaa.page';

describe('BahesJmaaPage', () => {
  let component: BahesJmaaPage;
  let fixture: ComponentFixture<BahesJmaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BahesJmaaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BahesJmaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
