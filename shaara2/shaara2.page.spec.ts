import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Shaara2Page } from './shaara2.page';

describe('Shaara2Page', () => {
  let component: Shaara2Page;
  let fixture: ComponentFixture<Shaara2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shaara2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Shaara2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
