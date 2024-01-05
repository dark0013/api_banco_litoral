import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './services/app/spotitfy-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spotify-app';
  artistId: string = '1vCWHaC5f2uS3yhpwWbIA6'; // Reemplaza con el ID del artista real
  artistDetails: any;

  constructor(private spotifyServices: SpotifyApiService) { }

  ngOnInit(): void {
    this.spotifyServices.getAllMusic(this.artistId)
      .subscribe(
        (data) => {
          this.artistDetails = data;
          console.log('Detalles del artista:', this.artistDetails);
        },
        (error) => {
          console.error('Error al obtener detalles del artista:', error);
        }
      );
  }


}
