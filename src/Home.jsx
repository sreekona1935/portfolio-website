import React from 'react';
import image from './img/profile.jpg';

export default function Home() {
  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div className="profile-pic-circle">
        <img 
          src={image} 
          alt="Profile" 
          style={{ width: 170, height: 170, borderRadius: '50%', objectFit: 'cover', border: '4px solid #753742', background: '#eee' }} 
        />
      </div>
      <div>
        <h1>Hi, I'm Sree Kona</h1>
        <h3>Junior at Univesity of North Texas | Data Science Enthusiast </h3>
        <p>
          I'm deeply passionate about the intersection of data science and finance, with a current focus 
          on building hands-on projects in Python and SQL. My long-term vision is to become an AI-driven 
          investment strategist who bridges technology and financial insight to shape smarter, more ethical markets.
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
