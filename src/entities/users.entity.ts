import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import { Contact } from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 95 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 11, unique: true })
  phone: string;

  @Column({ nullable: true, type: "text" })
  image: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | null;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) this.password = hashSync(this.password, 10);
  }
}

export { User };
