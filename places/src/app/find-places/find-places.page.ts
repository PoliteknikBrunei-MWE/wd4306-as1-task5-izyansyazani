import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-find-places',
  templateUrl: './find-places.page.html',
  styleUrls: ['./find-places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FindPlacesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
