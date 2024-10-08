import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
      itemId,
      referenceNumber,
    } = await request.json();
    const adjustment = await db.transferStockAdjustment.create({
      data: {
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
        receivingWarehouseId,
        notes,
        itemId,
        referenceNumber,
      },
    });
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create adjustment",
      },
      { status: 500 }
    );
  }
}
