import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Album, Photo } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Get all albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get a single album by ID
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new album
  createAlbum(album: Omit<Album, 'id'>): Observable<Album> {
    return this.http.post<Album>(`${this.apiUrl}/albums`, album)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update an album
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete an album
  deleteAlbum(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/albums/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get photos for a specific album
  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${albumId}/photos`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling method
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => error.message || 'Server error');
  }
}