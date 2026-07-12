import React, { useState, useEffect } from "react";
import "./style.css";
// import { FaPaperPlane } from "react-icons/fa";

export default function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // Load saved data from localStorage
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !comments) {
      alert("Please fill in all fields.");
      return;
    }

    const newPost = {
      id: Date.now(),
      name,
      email,
      comments,
    };

    setPosts([...posts, newPost]);

    // Clear the form
    setName("");
    setEmail("");
    setComments("");
  }

  return (
    <div className="parent">
      <h1>Request</h1>

      <form onSubmit={handleSubmit}>

       <h2>Name</h2>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            border: "1px solid black",
            display: "block",
            marginBottom: "10px",
          }}
        />
         
         <h2>Email</h2>
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: "1px solid black",
            display: "block",
            marginBottom: "10px",
          }}
        />

        <h2>Comments</h2>

        <textarea
          placeholder="Enter your comments..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={{
            border: "1px solid black",
            display: "block",
            marginBottom: "10px",
            height: "150px",
            width: "300px",
          }}
        />

        <button type="submit" className="post">
           {/* <FaPaperPlane /> */}Post
        </button>
      </form>

      <hr />

      <h2>Submitted Requests</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            // border: "1px solid gray",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
          }}
        >
          <h3>{post.name}</h3>
          <p>
            <strong>Email:</strong> {post.email}
          </p>
          <p>
            <strong>Comments:</strong> {post.comments}
          </p>
        </div>
      ))}
    </div>
  );
}