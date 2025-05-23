import React from 'react'

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Website</h1>
      <p>This is my first website that using React</p>
      <div className="features">
        <div className="feature">
          <h3>Home</h3>
          <p>This is the home page</p>
        </div>
        <div className="feature">
          <h3>About</h3>
          <p>Uses the latest React features and best practices</p>
        </div>
        <div className="feature">
          <h3>Responsive</h3>
          <p>Looks great on all devices</p>
        </div>
      </div>
    </div>
  )
}

export default Home 