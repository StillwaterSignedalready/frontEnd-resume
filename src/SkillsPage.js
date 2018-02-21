import React from 'react'
import ReactDOM from 'react-dom'
// import './CoverPage.css'


class SkillsPage extends React.Component{

	render(){
		return (
			<div className="wrapper" onWheel={this.props.onScroll}>
				<h1>擅长技术</h1>
				<p>热爱数学物理与科技 | 自学能力强 | 博而专</p>
				<h3>寻找一份前端开发的工作</h3>
				<a href="http://blog.csdn.net/sinat_34991877">My Blog</a>
			</div>
		)
	}
}

export default SkillsPage