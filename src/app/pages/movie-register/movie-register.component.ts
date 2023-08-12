import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/types/Movie';

@Component({
  selector: 'app-movie-register',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.css']
})
export class MovieRegisterComponent {
  registerForm = this.formBuilder.group({
    title: new FormControl('', Validators.required),
    rating: new FormControl<number | undefined>(undefined),
    synopsis: new FormControl<string | undefined>(undefined),
    banner: new FormControl('', Validators.pattern('http(s)?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)')),
  });

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router: Router,
  ) { };

  handleSubmit() {
    if (this.registerForm.valid) {
      const movie = this.registerForm.value as Omit<Movie, 'id'>;
      this.moviesService.addMovie(movie);
      this.router.navigate(['/']);
    }
  }

  handleRate(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) return;

    this.registerForm.patchValue({ rating: parseInt(event.target.value) });
  }
}
