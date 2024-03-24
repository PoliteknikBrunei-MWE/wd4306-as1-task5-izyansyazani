import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class OffersPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToOfferDetails(offerId: number) {
    this.router.navigate(['/offer-details', offerId]);
  }
}
