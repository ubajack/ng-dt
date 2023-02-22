package com.example.demo.datetime.controllers;

import com.example.demo.datetime.models.Episode;
import com.example.demo.datetime.models.EpisodeWithTimestamp;
import com.example.demo.datetime.services.EpisodeServiceInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/episodes")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class EpisodeAPI {

    private final EpisodeServiceInterface episodeService;

    @GetMapping({"", "/"})
    public List<Episode> all() {
        return episodeService.getAll();
    }

    @GetMapping("/{id}")
    public Episode one(@PathVariable Integer id) {
        return episodeService.getOne(id);
    }

    /* Return object of type EpisodeWithTimestamp */
    @GetMapping("/timestamp/{id}")
    public EpisodeWithTimestamp oneWithTimestamp(@PathVariable Integer id) {
        System.out.println("Retour d'un objet de type Episode dont la date est remplacée par le timestamp");
        return new EpisodeWithTimestamp().createClone(episodeService.getOne(id));
    }

    /* Save episode receiving timestamp or date */
    @PostMapping({"", "/"})
    public Episode add(@RequestBody Episode episode) {
        System.out.println("Réception d'objet de type Episode avec une date de type Date ou de type number");
        System.out.println(episode);
        return episodeService.add(episode);
    }

}
