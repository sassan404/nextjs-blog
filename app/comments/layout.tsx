// Simple version without client state management
"use client";
import { createComment } from "../actions/createComment.action";

export default function Comments() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget; // Save reference before await
    const formData = new FormData(form);
    await createComment(formData);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='write a comment' name='comment' />
      <button type='submit'>Submit</button>
    </form>
  );
}
