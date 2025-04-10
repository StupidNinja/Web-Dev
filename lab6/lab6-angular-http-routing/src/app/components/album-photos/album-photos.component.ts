import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Photo } from '../../models/album.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = 0;
  album: Album | null = null;
  photos: Photo[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlbumInfo();
    this.getPhotos();
  }

  getAlbumInfo(): void {
    this.albumsService.getAlbum(this.albumId).subscribe({
      next: (album) => {
        this.album = album;
      },
      error: (error) => {
        this.error = 'Failed to load album info: ' + error;
      }
    });
  }

  getPhotos(): void {
    this.loading = true;
    this.albumsService.getAlbumPhotos(this.albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load photos: ' + error;
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}