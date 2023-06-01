import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 95 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

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

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
