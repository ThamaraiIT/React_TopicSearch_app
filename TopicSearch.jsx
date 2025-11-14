import React, { useState } from 'react';
import './TopicSearch.css';

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Photosynthesis", category: "Biology" },
  { id: 3, name: "Calculus", category: "Mathematics" },
  { id: 4, name: "World War II", category: "History" },
  { id: 5, name: "Organic Chemistry", category: "Chemistry" },
  { id: 6, name: "Quantum Mechanics", category: "Physics" },
  { id: 7, name: "Genetics", category: "Biology" },
  { id: 8, name: "Linear Algebra", category: "Mathematics" },
  { id: 9, name: "Renaissance Art", category: "History" },
  { id: 10, name: "Inorganic Chemistry", category: "Chemistry" }
];

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topicsData.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Topic Search</h2>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
      <div className="cardContainer">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p>No topics found</p>
        )}
      </div>
    </div>
  );
};



export default TopicSearch;