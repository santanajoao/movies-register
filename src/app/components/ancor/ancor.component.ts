import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ancor',
  templateUrl: './ancor.component.html',
  styleUrls: ['./ancor.component.css']
})
export class AncorComponent {
  @Input() routerLink: any[] | undefined;
}
