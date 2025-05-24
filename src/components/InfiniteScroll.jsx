import React, { useEffect, useState } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);

  let startIdx = (page - 1) * perPage;
  let endIdx = page * perPage;
  const currentPage = data.slice(startIdx, endIdx);

  const totalPages = Math.ceil(data.length / perPage);

  return (
    <div>
      <h1 style={{ color: 'var(--primary-accent)' }}>Posts</h1>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {currentPage.map(post => (
          <li
            key={post.id}
            style={{
              padding: "20px",
              border: "1px solid #444",
              background: "rgba(100,108,255,0.03)",
              color: "var(--text)",
              borderRadius: 8,
              marginBottom: 12
            }}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 16 }}>
        {[...Array(totalPages).keys()].map(pageNum => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum + 1)}
            style={{
              margin: "0 4px",
              background: page === pageNum + 1 ? "var(--primary-accent)" : "var(--surface)",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "6px 12px",
              cursor: "pointer"
            }}
          >
            {pageNum + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
