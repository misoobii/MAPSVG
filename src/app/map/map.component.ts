import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  countryName: string | undefined;
  countryCapitalCity: string | undefined;
  countryRegionValue: string | undefined;
  countryIncomeLevelValue: string | undefined;
  countryLongitude: string | undefined;
  countryLatitude: string | undefined;

  constructor(private countryService: CountryService) {}

  onCountryHover(code: string): void {
    console.log(`Country hovered: ${code}`);
    this.countryService.getCountryDetails(code).subscribe(data => {
      this.countryName = data.name;
      this.countryCapitalCity = data.capitalCity;
      this.countryRegionValue = data.region.value; // ✅ fixed
      this.countryIncomeLevelValue = data.incomeLevel.value;
      this.countryLongitude = data.longitude;
      this.countryLatitude = data.latitude; // ✅ fixed
    });
  }
}
