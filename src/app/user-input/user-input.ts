import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() calculator = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExprctedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    this.calculator.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExprctedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
