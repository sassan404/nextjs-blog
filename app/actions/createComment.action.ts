"use server";

import { neon } from "@neondatabase/serverless";

// Simple server action for direct form usage
export async function createComment(formData: FormData) {
  try {
    const sql = neon(process.env.DATABASE_URL ?? "");

    await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
    const comment = formData.get("comment");
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;

    console.log("Comment created successfully!");
  } catch (error) {
    console.error("Error creating comment:", error);
  }
}
