import {Component, Input} from '@angular/core';
import {Category, ChucknorrisService} from '../chucknorris.service';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent {
  jokeText = '';

  @Input()
  category?: Category;

  @Input()
  bold = false;

  constructor(private service: ChucknorrisService) {
  }

  loadJoke() {
    this.service.loadJoke(this.category).subscribe(joke => {
        this.jokeText = joke.value;
      }
    )
  }


}
