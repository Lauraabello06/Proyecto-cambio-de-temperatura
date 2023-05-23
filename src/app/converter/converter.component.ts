import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent{

  /*celsius: number = this.celsius;
  fahrenheit: number = this.fahrenheit;
  convertedValue: string= this.fahrenheit;


  constructor(private http: HttpClient){}

  convertCelsius() {
    let params = new HttpParams().set('celsius', this.celsius.toString())
    this.http.get('http://localhost:8000/convert_celsius_to_fahrenheit/', [params:"JSON"]).subscribe((res: any) => {
      this.fahrenheit = res.fahrenheit_value;
      this.convertedValue = `http://localhost:8000/show_fahrenheit_value/${this.fahrenheit}`;
    });
  }
}
/*
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    /*this.http.getAll().subscribe(this.fahrenheit =>{
      this.celsius = this.celsius;
  }

  onSubmit() {  
    console.log(`El producto ${this.celsius} se ha enviado.`);  
  } 

// Método para enviar la petición al servidor
   
}
/*
// Propiedad fahrenheit
public getFahrenheit(): number {
    return this.fahrenheit;
}

public setFahrenheit(fahrenheit: number): void {
    this.fahrenheit = fahrenheit;
}
}
*/
}
