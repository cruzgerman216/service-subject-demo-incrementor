import { Component, OnInit } from '@angular/core';
import { IncrementorService } from '../incrementor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count:number = 0;
  constructor(private incrementorService:IncrementorService) { }

  ngOnInit(): void {
    // Subscribe to countSubject broadcasts
    this.incrementorService.countSubject.subscribe((updatedCount)=>{
      this.count = updatedCount;
    })
  }

}
