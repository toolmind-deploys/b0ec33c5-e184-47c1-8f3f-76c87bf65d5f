import { firestore } from "firebase-admin";
import { initFirebaseAdminSDK } from "@/config/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";

initFirebaseAdminSDK();
const fsdb = firestore();

export async function GET() {
  try {
    // Since we don't have any specific Firestore schema defined,
    // we'll just return a simple message
    return NextResponse.json({
      message: "Welcome to the Dashboard!",
      status: "success"
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}