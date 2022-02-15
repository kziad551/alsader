import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarkadAlsayedImagesPage } from './markad-alsayed-images.page';

describe('MarkadAlsayedImagesPage', () => {
  let component: MarkadAlsayedImagesPage;
  let fixture: ComponentFixture<MarkadAlsayedImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkadAlsayedImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarkadAlsayedImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
