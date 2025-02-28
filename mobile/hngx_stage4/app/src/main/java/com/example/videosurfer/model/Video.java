package com.example.videosurfer.model;

import android.net.Uri;

import java.util.UUID;

public class Video {
    private String id;
    private Uri uri;
    private boolean isFavorite;

    public Video(Uri uri) {
        this.id = UUID.randomUUID().toString();
        this.uri = uri;
        this.isFavorite = false;
    }

    public Uri getUri() {
        return uri;
    }

    public boolean isFavorite() {
        return isFavorite;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }
}
