import { Component, Input } from '@angular/core';
import { Movie } from 'src/types/Movie';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css']
})
export class MovieBannerComponent {
  @Input() movie: Movie | undefined;
}
