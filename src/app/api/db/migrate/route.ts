import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import { migrate } from "drizzle-orm/vercel-postgres/migrator"; 

export async function GET(request: Request) {
  await migrate(verceldb, { migrationsFolder: "src/verceldb/migrations" })
  return NextResponse.json({})
}