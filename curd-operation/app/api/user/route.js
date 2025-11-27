import { connectDB } from "@/app/lib/dbConnect";
import User from "@/app/model/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return Response.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const newUser = await User.create({ name, email });

    return Response.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
