import prisma from '@/lib/global_client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Step 1: Fetch all items
    const itemsData = await prisma.item.findMany({
      where: {
        status: "uploaded",
      },
      orderBy: {
        createdAt: 'desc', // Most recent first
      },
      include: {
        model: {
          select: {
            categoryId: true,
            id: true, // Include model ID for distinguishing properties
          },
        },
        watchlist: true,
        user: {
          select:{
          firstName: true,
          lastName: true
        }}
      },
    });



    const carsData = itemsData.filter(
      (item)=> item.model.categoryId === 1 
      )

    const electronicsData = itemsData.filter(
      (item)=> item.model.categoryId === 4 || item.model.categoryId === 3 
      )

    // Step 2: Special handling for category 2 (properties)
    const propertiesData = itemsData.filter(
      (item) => item.model.categoryId === 2 // Filter items for category 2
    );

    
    // Separate into house and land properties
    const houseProperties = propertiesData.filter(
      (property) => property.modelId === 3 // Houses: model ID 3
    );

    const landProperties = propertiesData.filter(
      (property) => property.modelId === 5 // Lands: any other model ID
    );

    // Select a single house and land property if they exist

    const selectedHouse = houseProperties[0] ? { ...houseProperties[0], count: houseProperties.length } :  null;
    const selectedLand = landProperties[0] ? { ...landProperties[0], count: landProperties.length } :  null;
    const selectedCar = carsData[0] ? { ...carsData[0], count: carsData.length } :  null;
    const selectedElectronics = electronicsData[0] ? { ...electronicsData[0], count: electronicsData.length } :  null;;
    
    // Step 3: Prepare a merged data array, avoiding duplicates and missing data
    const count = landProperties?.length
    const mergedData = [
      selectedHouse,
      selectedLand,
      selectedCar,
      selectedElectronics
    ].filter(Boolean);
    
    // Step 4: Return the final merged data
    return NextResponse.json({ items: [...mergedData] }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch items: ${error.message}` },
      { status: 500 }
    );
  }
}



export async function POST(request) {
  try {
    const { id } = await request.json(); 

    const itemsData = await prisma.item.findMany({
      where: {
        status: "uploaded",
      },
      orderBy: {
        createdAt: 'desc', 
      },
      include: {
        model: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    const allModels = await prisma.model.findMany();

    return NextResponse.json(
      { items: itemsData, models: allModels }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch data: ${error.message}` },
      { status: 500 }
    );
  }
}