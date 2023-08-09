import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent {
  @Input() disabled: boolean | undefined = false;
  @Input() rating: number | undefined = 0;
  @Input() size: string | undefined;

  handleChange(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.rating = parseInt(event.target.value);
    }
  }
}
