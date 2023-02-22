package com.example.demo.datetime.services;

import com.example.demo.datetime.models.Episode;

import java.util.List;

public interface EpisodeServiceInterface {

    List<Episode> getAll();
    Episode getOne(Integer id);
    Episode add(Episode episode);


}
