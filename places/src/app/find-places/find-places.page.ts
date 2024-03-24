import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './find-places.page.html',
  styleUrls: ['./find-places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PlacesPage implements OnInit {
  places: string[] = ['Brunei', 'Tutong', 'Belait', 'Temburong'];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPlace(place: string) {
    if (place === 'Brunei Muara') {
      this.router.navigate(['/place-detail']);
    }
  }
}
