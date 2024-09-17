import { UserType } from "@/types";
import { comparePassword, hashPassword } from "../helpers/bcrypt";
import { db } from "../config";
import { z } from "zod";
import { signToken } from "../helpers/jwt";
import { cookies } from "next/headers";

class User {
  static collection() {
    return db.collection<UserType>("users");
  }
  static async register(paylod: UserType) {
    // ? validasi
    const validation = z
      .object({
        username: z.string(),
        email: z.string().email({ message: "Invalid email address" }),
        password: z
          .string()
          .min(5, { message: "Must be 5 or more characters long" }),
      })
      .safeParse(paylod);
    if (!validation.success) throw validation.error;

    // ? cek di db email udah ada atau belum
    const email = await this.getByEmail(paylod.email);
    if (email) {
      let error = new Error();
      error.message = "Email already exists";
      throw error;
    }
    // ? cek di db username udah ada atau belum
    const username = await this.getByUserName(paylod.username);
    if (username) {
      let error = new Error();
      error.message = "Username already exists";
      throw error;
    }

    paylod.password = hashPassword(paylod.password);
    await this.collection().insertOne(paylod);
    return "berhasil register";
  }
  static async login(paylod: UserType) {
    // ? cek validation
    const validation = z
      .object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string(),
      })
      .safeParse(paylod);
    if (!validation.success) throw validation.error;

    // ? cek db
    const user = await this.collection().findOne({
      email: paylod.email,
    });
    if (!user) {
      let error = new Error();
      error.message = "User Not Found";
      throw error;
    }

    // ? compare password
    const isValid = comparePassword(paylod.password, user.password);
    if (!isValid) {
      let error = new Error();
      error.message = "Invalid Email/Password";
      throw error;
    }

    // ? generate token
    const accessToken = signToken({
      _id: String(user._id),
    });

    // ? set cookie
    cookies().set("Authorization", `Bearer ${accessToken}`);
    return accessToken;
  }
  static async getByEmail(email: string) {
    const data = await this.collection().findOne({
      email: email,
    });
    return data;
  }
  static async getByUserName(username: string) {
    const data = await this.collection().findOne({
      username: username,
    });
    return data;
  }
}

export default User;
