import { Component } from '@angular/core';
import { Movie } from 'src/types/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movie: Movie = {
    title: 'Invocação do Mal',
    synopsis: 'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',
    banner: 'https://ultimatodobacon.com/static/0294f0cd9a69d9780ef8812aa167620a/b4acf/Invocac%25CC%25A7a%25CC%2583o-do-Mal.jpg'
  };
}
