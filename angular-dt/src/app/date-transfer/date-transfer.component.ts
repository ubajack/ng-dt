import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateService } from '../date.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-date-transfer',
  templateUrl: './date-transfer.component.html',
  styleUrls: ['./date-transfer.component.css'],
})
export class DateTransferComponent {
  constructor(private dateService: DateService) {}

  private actualDate!: Date;
  public dateForm!: FormGroup;
  public timestampForm!: FormGroup;
  public retrievedEpisode?: Episode;
  public retrievedTimestampEpisode?: Episode;
  public retrievedEpisodeFromId?: Episode;
  public idToRetrieve!: number;

  ngOnInit(): void {
    this.idToRetrieve = 1;
    /* Formulaire pour récupérer une date au format Date */
    this.dateForm = new FormGroup({
      name: new FormControl('Idiot Box'),
      // Le format le plus adapté pour l'utilisation du type datetime-local
      // en HTML semble être la local suédoise ('sv-SE')
      // Seul hic, un espace entre la date et l'heure qu'il faut remplacer par un 'T'
      releaseDate: new FormControl(
        new Date().toLocaleString('sv-SE').replace(' ', 'T')
      ),
    });

    /* Formulaire pour récupérer une date au format timestamp (number) */
    this.timestampForm = new FormGroup({
      name: new FormControl('Idiot Box'),
      releaseDate: new FormControl(new Date().valueOf()),
    });
  }

  onSubmit() {
    console.warn(this.dateForm.value);
    const { name, releaseDate } = this.dateForm.value;
    const createdEpisode = {
      id: undefined,
      name,
      releaseDate: new Date(releaseDate),
    };
    this.dateService.addEpisode(createdEpisode as Episode).subscribe((data) => {
      console.log('Returned data: ', data);
      this.retrievedEpisode = data;
    });
  }

  onSubmitTimestamp() {
    console.warn(this.timestampForm.value);
    const { name, releaseDate } = this.timestampForm.value;

    const createdEpisode: Episode = {
      id: undefined,
      name,
      releaseDate: releaseDate as number,
    };

    this.dateService.addEpisode(createdEpisode as Episode).subscribe((data) => {
      console.log('Returned data: ', data);
      this.retrievedTimestampEpisode = data;
    });
  }

  retrieveEpisode() {
    this.dateService.getEpisode(this.idToRetrieve).subscribe((data) => {
      this.retrievedEpisodeFromId = data;
    });
  }
}
