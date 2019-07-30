import { Component } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'Admin Panel';
  subTitle = 'Administer your app';
}