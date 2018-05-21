import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  selectedCountry = 0;
  selectedState = 0;
  jsonResponse;
  title = 'Smart Selection Box App';
  cities = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUrls();
  }

  getUrls() {
    console.log('HI');
    this.http.get('https://raw.githubusercontent.com/Abhijith-Nagaraja/all-countries-and-cities-json/master/countries.json').subscribe(data => {
      console.log(data);
      this.jsonResponse = data;
    });
  }
  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = this.getCity().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }

   getCountries() {
    return [
      { id: 1, name: 'Afghanistan' },
      { id: 2, name: 'Albania' },
      { id: 3, name: 'Algeria' },
      { id: 4, name: 'Australia' },
      { id: 5, name: 'India' },
      { id: 6 , name: 'USA' },
    ];
  }

  getCity() {
    return [
      { id: 1, country_id: 1, name: 'Herat' },
      { id: 2, country_id: 1, name: 'Kabul' },
      { id: 3, country_id: 1, name: 'Kandahar' },
      { id: 4, country_id: 1, name: 'Molah' },
      { id: 5, country_id: 1, name: 'Shar' },
      { id: 6, country_id: 1, name: 'Wazir Akbar Khan' },


      { id: 7, country_id: 2 , name: 'Elbasan' },
      { id: 8, country_id: 2, name: 'Petran' },
      { id: 9, country_id: 2, name: 'Pogradec' },
      { id: 10, country_id: 2, name: 'Shkoder' },
      { id: 11, country_id: 2, name: 'Tirana' },
      { id: 12, country_id: 2, name: 'Ura Vajgurore' },

      { id: 13, country_id: 3, name: 'Algiers' },
      { id: 14, country_id: 3, name: 'Azazga' },
      { id: 15, country_id: 3, name: 'Blida' },
      { id: 16, country_id: 3, name: 'Chlef' },
      { id: 17, country_id: 3, name: 'Chlef' },

      { id: 18, country_id: 4, name: 'Aberglasslyn' },
      { id: 19, country_id: 4, name: 'Abermain' },
      { id: 20, country_id: 4, name: 'Adamstown' },
      { id: 21, country_id: 4, name: 'Binnaway' },
      { id: 22, country_id: 4, name: 'Chamblet' },
      { id: 23, country_id: 4, name: 'Melbourne' },

      { id: 24, country_id: 5, name: 'Pune' },
      { id: 25, country_id: 5, name: 'Mumbai' },
      { id: 26, country_id: 5, name: 'Chennai' },
      { id: 27, country_id: 5, name: 'Hyderabad' },
      { id: 28, country_id: 5, name: 'Delhi' },
      { id: 29, country_id: 5, name: 'Bhopal' },


      { id: 30, country_id: 6, name: 'Alaska' },
      { id: 31, country_id: 6, name: 'New York' },
      { id: 32, country_id: 6, name: 'San Francisco' },
      { id: 33, country_id: 6, name: 'Santa Clara' },
      { id: 34, country_id: 6, name: 'Mountain View' },
      { id: 35, country_id: 6, name: 'Sparks' },
    ]
  }
}
