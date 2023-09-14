import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';

@Injectable()
export class CatsService {
  private readonly cats: Array<Cat & { ownerId?: number }> = [
    { id: 1, name: 'Calico', age: 5, ownerId: 1 },
    { id: 2, name: 'Persian', age: 3, ownerId: 2 },
    { id: 3, name: 'Orange', age: 3, ownerId: 3 },
    { id: 4, name: 'Maxwell', age: 3, ownerId: 4 },
  ];

  create(cat: Cat): Cat {
    cat.id = this.cats.length + 1;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOneById(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
