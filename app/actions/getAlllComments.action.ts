"use server";

import { neon } from "@neondatabase/serverless";

// Simple server action for direct form usage
export async function getAllComments(): Promise<any[]> {
  try {
    const sql = neon(process.env.DATABASE_URL ?? "");

    await sql`CREATE TABLE IF NOT EXISTS comments (
                comment TEXT,
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
                )`;

    const comments = await sql`SELECT * FROM comments`;
    return Array.from(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}
