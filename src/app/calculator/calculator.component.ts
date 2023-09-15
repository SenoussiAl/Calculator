import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  nbr1Value = 0;
  nbr2Value = 0;
  resultValue = 0;

  add(value1:string, value2: string): void {
    this.nbr1Value = Number(value1);
    this.nbr2Value = Number(value2);
    this.resultValue = this.nbr1Value + this.nbr2Value;
    }
  sub(value1:string, value2: string): void {
    this.nbr1Value = Number(value1);
    this.nbr2Value = Number(value2);
    this.resultValue = this.nbr1Value - this.nbr2Value;
  }
  mul(value1:string, value2: string): void {
    this.nbr1Value = Number(value1);
    this.nbr2Value = Number(value2);
    this.resultValue = this.nbr1Value * this.nbr2Value;
  }
  div(value1:string, value2: string): void {
    this.nbr1Value = Number(value1);
    this.nbr2Value = Number(value2);
    this.resultValue = this.nbr1Value / this.nbr2Value;
  }
  clear(): void {
    this.nbr1Value = 0;
    this.nbr2Value = 0;
    this.resultValue = 0;
  }
  }
