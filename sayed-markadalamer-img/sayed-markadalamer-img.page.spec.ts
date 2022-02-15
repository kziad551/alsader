import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SayedMarkadalamerImgPage } from './sayed-markadalamer-img.page';

describe('SayedMarkadalamerImgPage', () => {
  let component: SayedMarkadalamerImgPage;
  let fixture: ComponentFixture<SayedMarkadalamerImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedMarkadalamerImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SayedMarkadalamerImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
