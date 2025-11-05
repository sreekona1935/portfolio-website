import React from 'react';
import image from './img/profile.jpg';

export default function Home() {
  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div className="profile-pic-circle">
        <img 
          src={image} 
          alt="Profile" 
          style={{ width: 170, height: 170, borderRadius: '50%', objectFit: 'cover', border: '4px solid #61dafb', background: '#eee' }} 
        />
      </div>
      <div>
        <h1>Hi, I'm Sree Kona</h1>
        <h3>Computer Science at University of North Texas | AI &amp; Data Science  </h3>
        <p>
          I’m passionate about the intersection of computer science, data analytics, and real-world problem-solving. I enjoy building projects that use Python, C++, and JavaScript to turn data into insights and interactive tools. My interests include machine learning, simulation modeling, web development, and cybersecurity research.
        </p>

        <h3 style={{ marginTop: '1.5rem' }}>Achievements:</h3>
        <p>🏆 Google Analytics Certification</p>
        <p>📜 CFA Level 1 in progress</p>
        <p>🚀 Aerospace coding support project</p>
        <p>🏈 Football Team Manager</p>
        <p>🎓 President of Aerospace Club</p>
      </div>
    </section>
  );
}