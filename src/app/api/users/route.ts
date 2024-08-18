import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to retrieve users" },
            { status: 500 },
        );
    }
}

export async function POST(req: NextRequest) {
    const { name, email, password, cv, picture } = await req.json();

    try {
        const newUser = await prisma.user.create({
            data: { name, email, picture, cv, password },
        });
        return NextResponse.json(newUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User creation failed" },
            { status: 400 },
        );
    }
}

export async function PUT(req: NextRequest) {
    const { id, name, email } = await req.json();

    try {
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });
        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User update failed" },
            { status: 400 },
        );
    }
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    try {
        await prisma.user.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User deletion failed" },
            { status: 400 },
        );
    }
}
