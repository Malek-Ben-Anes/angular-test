import { Component, OnInit } from '@angular/core';
import { BureauService } from '../services';
import { Bureau } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bureaux: Bureau[];
  codepostal = 38000;
  constructor(private bureauService: BureauService) { }
  codePostalOrLocalite: boolean;
  ngOnInit() {
  }

  getBureauPostal() {
    this.bureauService.getBureauxCodepostal(this.codepostal).subscribe(bureaux => {
      this.bureaux = bureaux;
      console.log('elm', bureaux);
    });
  }

}
