package com.example.demo.datetime.repositories;

import com.example.demo.datetime.models.Episode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EpisodeRepository extends JpaRepository<Episode, Integer> {
}
