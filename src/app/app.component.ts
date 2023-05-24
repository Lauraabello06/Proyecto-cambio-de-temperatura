import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  celsius?: number;
  fahrenheit?: number;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getAllCelsius().subscribe(
      celsius => {
        this.celsius = celsius;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (this.celsius !== undefined) {
      this.service.saveDatos(this.celsius).subscribe(
        response => {
          this.fahrenheit = response.fahrenheit;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error("El valor de Celsius no está definido.");
    }
  }
}