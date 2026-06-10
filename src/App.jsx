import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container">
      <h1>Live Character Counter</h1>
      <div className="card">
        <label className="label">Enter Text</label>
        <textarea
          className="textarea"
          rows={6}
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="stats">
          <div className="stat-box">
            <span className="stat-value">{charCount}</span>
            <span className="stat-label">Characters</span>
          </div>
          <div className="divider" />
          <div className="stat-box">
            <span className="stat-value">{wordCount}</span>
            <span className="stat-label">Words</span>
          </div>
        </div>
      </div>
    </div>
  );
}
