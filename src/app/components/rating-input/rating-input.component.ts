import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent {
  @Input() disabled: boolean = false;
  @Input() rating: number | undefined = 0;
  @Input() size: string | undefined;
  @Output() rate = new EventEmitter();

  handleChange(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.rating = parseInt(event.target.value);
    }

    this.rate.emit(event);
  }
}
