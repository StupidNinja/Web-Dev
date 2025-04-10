import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models/album.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbum = { title: '', userId: 1 };
  loading = false;
  error: string | null = null;

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.loading = true;
    this.albumsService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load albums: ' + error;
        this.loading = false;
      }
    });
  }

  createAlbum(): void {
    if (this.newAlbum.title.trim()) {
      this.loading = true;
      this.albumsService.createAlbum(this.newAlbum).subscribe({
        next: (album) => {
          this.albums.unshift(album);
          this.newAlbum = { title: '', userId: 1 };
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to create album: ' + error;
          this.loading = false;
        }
      });
    }
  }

  deleteAlbum(album: Album, event: Event): void {
    event.stopPropagation();
    if (confirm(`Are you sure you want to delete "${album.title}"?`)) {
      this.loading = true;
      this.albumsService.deleteAlbum(album.id).subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== album.id);
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to delete album: ' + error;
          this.loading = false;
        }
      });
    }
  }

  viewAlbum(album: Album): void {
    this.router.navigate(['/albums', album.id]);
  }
}