import { Component } from '@angular/core';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentDate: string = new Date().getFullYear().toString();
}