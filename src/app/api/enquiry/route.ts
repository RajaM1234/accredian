import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid payload." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "We've received your enquiry. Our team will contact you shortly.",
      data: payload,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}
