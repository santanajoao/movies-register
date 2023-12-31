import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-radio-input',
  templateUrl: './star-radio-input.component.html',
  styleUrls: ['./star-radio-input.component.css']
})
export class StarRadioInputComponent {
  @Input() value: string | undefined;
  @Input() label: string | undefined;
  @Input() name: string | undefined;
  @Input() selectedRating: number | undefined;
  @Input() disabled: boolean | undefined = false;
  @Input() size: string | undefined;
  @Output() rate = new EventEmitter();

  isSelected() {
    return this.selectedRating && this.value
      && this.selectedRating >= parseInt(this.value);
  }

  isChecked() {
    return this.selectedRating === Number(this.value);
  }
}
