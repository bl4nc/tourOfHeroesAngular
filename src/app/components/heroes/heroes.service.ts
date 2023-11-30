import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mocks/heroMock';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from './hero-messages/hero-messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient, private messages: MessageService) { }

  private baseUrl = "https://e8b87c96-0b57-4114-8c47-5676958b8d73.mock.pstmn.io"

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messages.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    this.log('Fetched heroes')
    return this.http.get<Hero[]>(this.baseUrl + "/heroes").pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`)
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero)
  }

}
