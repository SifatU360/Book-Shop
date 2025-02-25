export type TRegister = {
    name: string;
    email: string;
    password: string;
  };
  
  export type JWTdecodedData = {
    email: string;
    iat: number;
    role: string;
    exp: number;
  };