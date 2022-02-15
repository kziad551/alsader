import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaAematJmaaPage } from './lekaa-aemat-jmaa.page';

describe('LekaaAematJmaaPage', () => {
  let component: LekaaAematJmaaPage;
  let fixture: ComponentFixture<LekaaAematJmaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaAematJmaaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaAematJmaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
