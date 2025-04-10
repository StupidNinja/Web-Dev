import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle: string = '';
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editTitle = album.title;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load album: ' + error;
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (this.album && this.editTitle.trim()) {
      this.loading = true;
      const updatedAlbum = { ...this.album, title: this.editTitle };
      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: (album) => {
          this.album = album;
          this.loading = false;
          alert('Album updated successfully!');
        },
        error: (error) => {
          this.error = 'Failed to update album: ' + error;
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}