import User from "@/db/models/User";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const result = await User.register(res);
    return Response.json({ msg: result });
  } catch (error: any) {
    let msgError = error.message || "Internal server error";
    let status = 500;

    if (error instanceof z.ZodError) {
      msgError = error.errors[0].path[0] + " " + error.errors[0].message;
      status = 400;
    }
    return Response.json(
      {
        msg: msgError,
      },
      {
        status: status,
      }
    );
  }
}
