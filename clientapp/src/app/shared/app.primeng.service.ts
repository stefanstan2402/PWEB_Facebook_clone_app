import { Injectable } from '@angular/core';
import { FilterService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppPrimeNgService {

  constructor(
    private filterService: FilterService) {
  }

  public initDiacriticsFilter() {
    this.filterService.register('filterDiacritics', (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }
      const normalizedSearchTerm = this.removeDiacritics(filter.toLowerCase());
      const normalizedValue = this.removeDiacritics(value.toLowerCase());
      if (normalizedValue.includes(normalizedSearchTerm)) {
        return true;
      }
      else {
        return false;
      }
    });
  }

  private removeDiacritics(str: string): string {
    const diacriticsMap = {
      'ă': 'a', 'Ă': 'A', 'â': 'a', 'Â': 'A', 'î': 'i', 'Î': 'I',
      'ș': 's', 'Ș': 'S', 'ț': 't', 'Ț': 'T'
    };

    return str.replace(/[ăĂâÂîÎșȘțȚ]/g, (char) => {
      return diacriticsMap[char] || char;
    });
  }
}
