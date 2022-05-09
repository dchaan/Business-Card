import React from 'react'

export default function Info() {
  return (
    <div className="info-container">
      <img src="images/profile_pic.png" alt="profile-pic"/>
      <h1>David Chan</h1>
      <h3>Software Engineer</h3>
      <div class="skills-container">
        <img src="images/js.png" className="skill-img" alt="javascript"/>
        <img src="images/node.png" className="skill-img" alt="node"/>
        <img src="images/react.png" className="skill-img" alt="react"/>
        <img src="images/redux.png" className="skill-img" alt="redux"/>
        <img src="images/ruby.png" className="skill-img" alt="ruby"/>
        <img src="images/postgresql.png" className="skill-img" alt="postgres"/>
        <img src="images/mongodb.png" className="skill-img" alt="mongodb"/>
        <img src="images/html.png" className="skill-img" alt="html"/>
        <img src="images/npm.png" className="skill-img" alt="npm"/>
      </div>
      <div className="btn-container">
        <a href="mailto:davidmchan1@gmail.com" className="email-btn"><i className="fa fa-envelope"></i>Email</a>
        <a href="http://www.linkedin.com/in/david-chan-4b1929185" className="linkedin-btn"><i className="fa fa-linkedin-square"></i>LinkedIn</a>
      </div>
    </div>
  )
}
