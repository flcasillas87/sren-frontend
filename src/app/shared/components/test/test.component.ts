import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  responseData!: any[];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchData().subscribe(data => {
      this.responseData = data;
    });
  }
}
