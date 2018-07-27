import { Component, AfterViewInit, Input } from '@angular/core';
import { Bureau } from '../types';
@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements AfterViewInit {

  constructor() { }



@Input() bureau: Bureau;


ngAfterViewInit() {
  
}

}
