import { User } from "@/entities/User";

export type Group = {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
};
