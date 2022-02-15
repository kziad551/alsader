import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadMp4Page } from './mawk3-alesteshhad-mp4.page';

describe('Mawk3AlesteshhadMp4Page', () => {
  let component: Mawk3AlesteshhadMp4Page;
  let fixture: ComponentFixture<Mawk3AlesteshhadMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mawk3AlesteshhadMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mawk3AlesteshhadMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
