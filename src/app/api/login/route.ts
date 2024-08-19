import { PrismaClient } from "@prisma/client";
import { comparePassword, signToken } from "@src/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        const user = await prisma.user.findUnique({ where: { email } });

        if (user && (await comparePassword(password, user.password))) {
            // Password matches, sign a token
            const token = signToken(user.email);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...rest } = user;

            return NextResponse.json({ user: rest, token });
        }
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User creation failed" },
            { status: 400 },
        );
    }
}
