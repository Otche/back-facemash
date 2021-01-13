import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryColumn()
  id: string;
  @Column()
  url: string;
}
