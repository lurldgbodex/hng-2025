package com.example.videosurfer.service;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.videosurfer.R;
import com.example.videosurfer.model.Video;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class VidoPagerAdapter extends RecyclerView.Adapter<VideoViewHolder> {
    private List<Video> videos = new ArrayList<>();
    private final Set<VideoViewHolder> activeHolders = new HashSet<>();

    @NonNull
    @Override
    public VideoViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.video_item, parent, false);
        return new VideoViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull VideoViewHolder holder, int position) {
        holder.bind(videos.get(position));
    }

    @Override
    public int getItemCount() {
        return videos.size();
    }

    @Override
    public void onViewAttachedToWindow(@NonNull VideoViewHolder holder) {
        super.onViewAttachedToWindow(holder);
        activeHolders.add(holder);
    }

    @Override
    public void onViewDetachedFromWindow(@NonNull VideoViewHolder holder) {
        super.onViewDetachedFromWindow(holder);
        activeHolders.remove(holder);
        holder.releasePlayer();
    }

    public void releasePlayer() {
        for (VideoViewHolder holder : activeHolders) {
            holder.releasePlayer();
        }
    }
}