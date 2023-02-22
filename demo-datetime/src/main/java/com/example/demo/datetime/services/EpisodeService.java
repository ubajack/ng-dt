package com.example.demo.datetime.services;

import com.example.demo.datetime.models.Episode;
import com.example.demo.datetime.repositories.EpisodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EpisodeService implements EpisodeServiceInterface {

    private final EpisodeRepository episodeRepository;

    @Override
    public List<Episode> getAll() {
        return episodeRepository.findAll();
    }

    @Override
    public Episode getOne(Integer id) {
        return episodeRepository.findById(id).get();
    }

    @Override
    public Episode add(Episode episode) {
        return episodeRepository.save(episode);
    }
}
