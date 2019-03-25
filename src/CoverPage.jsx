import React from 'react'
import ReactDOM from 'react-dom'
// import './CoverPage.css'

function CoverPage (props) {
  const className = 'wrapper ' + (props.className || ' ')  ;
    return (
      <div className={className} >
        <div className="avatar"></div>
        <h1>戴伟铭</h1>
        <p>热爱数学物理与科技 | 自学能力强 | 博而专</p>
        <h3>前端开发工程师</h3>
        <a href="http://blog.csdn.net/sinat_34991877">My Blog</a>
      </div>
    )
}

export default CoverPage