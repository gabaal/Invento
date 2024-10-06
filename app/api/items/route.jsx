import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      buyingPrice,
      sellingPrice,
      supplierId,
      reOrderPoint,
      warehouseId,
      imageUrl,
      weight,
      dimensions,
      taxRate,
      description,
      notes,
    } = await request.json();
    const item = {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      buyingPrice,
      sellingPrice,
      supplierId,
      reOrderPoint,
      warehouseId,
      imageUrl,
      weight,
      dimensions,
      taxRate,
      description,
      notes,
    };
    console.log(item);
    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create an item",
      },
      { status: 500 }
    );
  }
}
