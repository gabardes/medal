import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-send-medal',
  templateUrl: './send-medal.component.html',
  styleUrls: ['./send-medal.component.css']
})
export class SendMedalComponent implements OnInit {

  compress: number[] = [];
  popa: string[] = [];

  constructor(private data: DataService) {
    this.compress = this.data.getCompress();

    this.popa = this.data.getData();

   }

  ngOnInit(): void {
  }

}
