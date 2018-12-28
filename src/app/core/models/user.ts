import { RequestResponse } from './response';

export enum UserRole {
  Admin, Teacher, Student
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
  role: UserRole;
}

export interface LoginResponse extends RequestResponse {
  data: {
    user: User;
  };
}
