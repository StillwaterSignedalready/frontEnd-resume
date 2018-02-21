import React from 'react'
import ReactDOM from 'react-dom'
// import './ProjectPage.css'


class ProjectPage extends React.Component{

	render(){
		const projects = this.props.projects;
		return (
			<div className="wrapper">
				<h1>项目经验</h1>
				<ul>
					{projects.map((project) => 
						<li className="project" key={project.name}>
							{project.name}
						</li> )}
				</ul>
				<a className="github" href="http://blog.csdn.net/sinat_34991877">更多项目请移步GitHub</a>
			</div>
		)
	}
}

export default ProjectPage