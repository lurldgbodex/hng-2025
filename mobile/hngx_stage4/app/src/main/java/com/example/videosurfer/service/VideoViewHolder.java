package com.example.videosurfer.service;

import android.net.Uri;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.media3.common.MediaItem;
import androidx.media3.exoplayer.ExoPlayer;
import androidx.media3.ui.PlayerView;
import androidx.recyclerview.widget.RecyclerView;

import com.example.videosurfer.R;
import com.example.videosurfer.model.Video;

public class VideoViewHolder extends RecyclerView.ViewHolder {
    private PlayerView playerView;
    private ExoPlayer player;
    private Video currentVideo;

    public VideoViewHolder(@NonNull View itemView) {
        super(itemView);
        playerView = itemView.findViewById(R.id.playerView);
    }

    public void bind(Video video) {
        this.currentVideo = video;
        initializePlayer(video.getUri());
    }

    private void initializePlayer(Uri videoUri) {
        if (player == null) {
            player = new ExoPlayer.Builder(itemView.getContext()).build();
            playerView.setPlayer(player);
        }

        MediaItem mediaItem = MediaItem.fromUri(videoUri);
        player.setMediaItem(mediaItem);
        player.prepare();
        player.play();
    }

    public void releasePlayer() {
        if (player != null) {
            player.release();
            player = null;
        }
    }
}
