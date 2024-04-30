import { Component ,OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-future-training',
  templateUrl: './future-training.component.html',
  styleUrls: ['./future-training.component.css']
})
export class FutureTrainingComponent implements OnInit {
  trainingStart= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onStart(){
    this.trainingStart.emit();

  }
}