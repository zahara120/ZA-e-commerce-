import jwt from "jsonwebtoken";
import * as jose from "jose";

const secret = process.env.JWT_SECRET as string;
export const signToken = (payload: { _id: string }) => {
  return jwt.sign(payload, secret);
};

export const verifyToken = async <T>(token: string) => {
  const secretJose = new TextEncoder().encode(secret);
  const { payload } = await jose.jwtVerify<T>(token, secretJose);
  return payload;
};
