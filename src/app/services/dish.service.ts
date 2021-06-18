import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }
  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((di) => (di.id == id))[0]);
  }
  getFeaturedDIsh(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((di) => di.featured)[0]);
  }
}
