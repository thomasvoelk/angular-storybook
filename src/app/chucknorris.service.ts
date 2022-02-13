import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  private readonly BASE_URL = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) {
  }

  loadJoke(category?: Category) {
    let requestUrl = this.BASE_URL;
    if(category) {
      requestUrl += '?category=' + category;
    }
    return this.httpClient.get<Joke>(requestUrl);
  }
}

export interface Joke {
  categories: Category[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export type Category =
  "animal"
  | "career"
  | "celebrity"
  | "dev"
  | "explicit"
  | "fashion"
  | "food"
  | "history"
  | "money"
  | "movie"
  | "music"
  | "political"
  | "religion"
  | "science"
  | "sport"
  | "travel";
