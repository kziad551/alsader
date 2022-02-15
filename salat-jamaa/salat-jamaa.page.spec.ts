import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalatJamaaPage } from './salat-jamaa.page';

describe('SalatJamaaPage', () => {
  let component: SalatJamaaPage;
  let fixture: ComponentFixture<SalatJamaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatJamaaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalatJamaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
