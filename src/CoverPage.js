import React from 'react'
import ReactDOM from 'react-dom'
import './CoverPage.css'


class CoverPage extends React.Component{

	render(){
		return (
			<div className="wrapper">
				<div className="avatar"></div>
				<h1>戴伟铭</h1>
				<p>热爱数学物理与科技 | 自学能力强 | 博而专</p>
				<h3>寻找一份前端开发的工作</h3>
				<a href="https://github.com/StillwaterSignedalready">我的GitHub</a>
			</div>
		)
	}
}

export default CoverPage