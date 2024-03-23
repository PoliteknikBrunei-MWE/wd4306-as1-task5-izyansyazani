import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OfferDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
