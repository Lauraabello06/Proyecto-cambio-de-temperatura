import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  celsius: number = 0;
  fahrenheit: number = 0;

  constructor(private service: DataService){

  }

  ngOnInit(): void {
    this.service.getAllCelsius().subscribe(celsius =>{
      this.celsius = celsius;
    })
  }
  onSubmit() {  
    this.service.saveDatos({celsius: this.celsius}).subscribe(
      response => {
        this.fahrenheit = response.fahrenheit;
      },
      error => {
        console.error(error);
      }
    );   
  } 
}