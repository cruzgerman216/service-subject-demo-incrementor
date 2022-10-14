import { Component, OnInit } from '@angular/core';
import { IncrementorService } from '../incrementor.service';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent implements OnInit {

  constructor(private incrementorService:IncrementorService) { }

  ngOnInit(): void {
  }

  // Click button
  onIncrementCount(){
    // Increment count Via incrementor Service
    this.incrementorService.incrementCount()
  }

}
