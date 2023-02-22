package com.example.demo.datetime.models;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class EpisodeWithTimestamp {

    private Integer id;
    private String name;
    private Long releaseDate;

    /* Create object of type EpisodeWithTimestamp from object of type Episode */
    public EpisodeWithTimestamp createClone(Episode episode) {
        return new EpisodeWithTimestamp(
                episode.getId(),
                episode.getName(),
                episode.getReleaseDate()
                        .getTime()
        );
    }

}
