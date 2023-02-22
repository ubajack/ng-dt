import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private apiUrl: string = 'http://localhost:8080/api/episodes';
  httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a DateService message */
  private log(message: string) {
    console.debug(`DateService: ${message}`);
  }

  /** GET episodes from the server */
  getEpisodes(): Observable<Episode[]> {
    this.log('fetched episodes');
    return this.http.get<Episode[]>(this.apiUrl).pipe(
      tap((_) => this.log('fetched episodes')),
      catchError(this.handleError<Episode[]>('getEpisodes', []))
    );
  }

  /** GET episode by id. Will 404 if id not found */
  getEpisode(id: number): Observable<Episode> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Episode>(url).pipe(
      tap((_) => this.log(`fetched episode id=${id}`)),
      catchError(this.handleError<Episode>(`getEpisode id=${id}`))
    );
  }

  /** POST: add a new episode to the server */
  addEpisode(episode: Episode): Observable<Episode> {
    console.log('Episode to save: ', episode);
    return this.http.post<Episode>(this.apiUrl, episode, this.httpOptions).pipe(
      tap((newEpisode: Episode) =>
        this.log(`added episode w/ id=${newEpisode.id}`)
      ),
      catchError(this.handleError<Episode>('addEpisode'))
    );
  }
}
