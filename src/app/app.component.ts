import { Component, OnInit } from '@angular/core';
import { CalculationServiceService } from './calculation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  title = 'app';
  tal1 = 0;
  tal2 = 0;
  resultat: number;


  beregn(): void {
    this.resultat = this._mathService.subtract( Number(this.tal1) , Number(this.tal2));
  }

  constructor(private _mathService: CalculationServiceService) {}

  ngOnInit(): void {
  }
}
