import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorAngulajs';

  getButtonsValue(buttons) {
    const AC = document.querySelector('#calculatorInput');
    AC.insertAdjacentHTML('beforeend', buttons);
  }

  evaluate() {
    const value = document.querySelector('#calculatorInput');
    try {
      const result = (eval(value.innerHTML));
      document.querySelector('#calculatorInput').innerHTML = result;
    } catch (err) {
      document.querySelector('#calculatorInput').innerHTML = err;
    }


  }
  clearInput() {
    const input = document.querySelector('#calculatorInput');
    input.innerHTML = '';
  }
}
