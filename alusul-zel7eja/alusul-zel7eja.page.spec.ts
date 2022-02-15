import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZel7ejaPage } from './alusul-zel7eja.page';

describe('AlusulZel7ejaPage', () => {
  let component: AlusulZel7ejaPage;
  let fixture: ComponentFixture<AlusulZel7ejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZel7ejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZel7ejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
