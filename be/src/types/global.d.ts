declare namespace Express {
  interface UserPayload {
    _id: string;
    email?: string;
    name?: string;
    isAdmin?: boolean;
  }

  interface Request {
    user: UserPayload;
  }
}


