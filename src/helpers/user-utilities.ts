import User from "../models/user.model"

export function createUser(
    firstName: string, 
    lastName: string, 
    email: string
): User {
  return {
      firstName,
      lastName,
      email
  }
}