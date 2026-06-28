import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExprctedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    console.log('Submited...!');
    console.log(this.enteredAnnualInvestment)
    console.log(this.enteredDuration);
    console.log(this.enteredExprctedReturn);
    console.log(this.enteredInitialInvestment);
    
    
    
  }
}
