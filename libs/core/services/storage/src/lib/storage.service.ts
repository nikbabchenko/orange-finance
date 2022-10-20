import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getItem<T>(key: string): T | null {
    const value: unknown = localStorage.getItem(key) 

    if (value) {
      try {
        return JSON.parse(value as string);
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  }

  setItem(value: unknown, key: string): void {
    if (value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
