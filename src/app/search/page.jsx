"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SearchPageInner() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const content = sessionStorage.getItem("pageContent")?.toLowerCase() || "";

    if (query && content) {
      const matchingLines = content
        .split(". ")
        .filter((line) => line.includes(query))
        .slice(0, 5);

      setResults(matchingLines.length ? matchingLines : ["No match found."]);
    }
  }, [query]);

  return (
    <div
      className="container"
      style={{
        maxWidth: "820px",
        margin: "3.5rem auto 2rem auto",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        padding: "2.5rem 2rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: "#222",
          letterSpacing: "0.01em",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "0.75rem",
        }}
      >
        Search Results for: <span style={{ color: "#f97316" }}>"{query}"</span>
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {results.map((res, idx) => (
          <li
            key={idx}
            style={{
              background: idx % 2 === 0 ? "#fff7f0" : "#fff7f0",
              borderRadius: "8px",
              marginBottom: "1rem",
              padding: "1.1rem 1.25rem",
              fontSize: "1.08rem",
              color: res === "No match found." ? "#b91c1c" : "#222",
              fontStyle: res === "No match found." ? "italic" : "normal",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              border: res === "No match found." ? "1px solid #fee2e2" : "none",
              textAlign: "left",
              wordBreak: "break-word",
              lineHeight: 1.6,
              fontWeight: res === "No match found." ? 500 : 400,
              letterSpacing: "0.01em",
            }}
          >
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPageInner />
    </Suspense>
  );
}
