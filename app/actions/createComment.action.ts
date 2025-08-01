"use server";

import { neon } from "@neondatabase/serverless";

// Simple server action for direct form usage
export async function createComment(formData: FormData) {
  try {
    const sql = neon(process.env.DATABASE_URL ?? "");

    await sql`CREATE TABLE IF NOT EXISTS comments (
                comment TEXT,
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
                )`;

    const comment = formData.get("comment");
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;

    console.log("Comment created successfully!");

    return { success: true };
  } catch (error) {
    console.error("Error creating comment:", error);
    return { success: false };
  }
}
