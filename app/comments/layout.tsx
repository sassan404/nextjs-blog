// Simple version without client state management
"use client";
import { use, useContext, useEffect, useState } from "react";
import { createComment } from "../actions/createComment.action";
import { getAllComments } from "../actions/getAlllComments.action";

export default function Comments() {
  const [comments, setComments] = useState<any[]>([]);

  async function fetchComments() {
    const comments = await getAllComments();
    setComments(comments);
    alert("Comments fetched successfully!");
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget; // Save reference before await
    const formData = new FormData(form);
    const result = await createComment(formData);
    alert(
      result.success
        ? "Comment created successfully!"
        : "Failed to create comment"
    );
    fetchComments();
    form.reset();
  }

  return (
    <>
      <ul
        style={{
          display: "grid",
          borderTop: "1px solid rgb(83 81 81)",
          padding: 0,
        }}
      >
        {comments.map((comment: any) => (
          <li
            key={comment.id}
            style={{
              display: "inline-grid",
              gridAutoFlow: "column",
              justifyContent: "space-between",
              borderBottom: "1px solid rgb(83 81 81)",
              borderRight: "1px solid rgb(83 81 81)",
              borderLeft: "1px solid rgb(83 81 81)",
            }}
          >
            <a
              style={{
                padding: "5px",
              }}
            >
              {comment.comment}
            </a>
            <a
              style={{
                padding: "5px",
                borderLeft: "1px solid rgb(83 81 81)",
                paddingLeft: "10px",
              }}
            >
              {new Date(comment.created_at).toLocaleString()}
            </a>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='write a comment' name='comment' />
        <button type='submit'>Submit</button>
      </form>{" "}
    </>
  );
}
