import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  private clientId: string = 'b04a60e1918a40608bf2f80f64c4aa90'; // Reemplaza con tu Client ID
  private clientSecret: string = '697a1f09ac27440c8a6ae949dbd18549'; // Reemplaza con tu Client Secret
  private apiUrl: string = `${environment.HOST}`; // URL base de la API de Spotify

  constructor(private http: HttpClient) { }

  getAllMusic(artistId: string): Observable<any> {
    return this.getAccessToken().pipe(
      switchMap((tokenResponse) => {
        const url = `${this.apiUrl}/artists`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenResponse.access_token}`
        });
  
        return this.http.get(url, { headers });
      })
    );
  }

  private getAccessToken(): Observable<any> {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });
    const body = 'grant_type=client_credentials';

    return this.http.post(tokenUrl, body, { headers });
  }
}
