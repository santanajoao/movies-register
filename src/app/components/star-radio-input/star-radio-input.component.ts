import { Component, Input } from '@angular/core';

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

  isSelected() {
    return this.selectedRating && this.value
      && this.selectedRating >= parseInt(this.value);
  }
}
