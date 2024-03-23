import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindPlacesPage } from './find-places.page';

describe('FindPlacesPage', () => {
  let component: FindPlacesPage;
  let fixture: ComponentFixture<FindPlacesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FindPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
