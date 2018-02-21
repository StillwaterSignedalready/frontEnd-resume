import React from 'react'
import ReactDOM from 'react-dom'
// import './CoverPage.css'


class SkillsPage extends React.Component{

	/**
	 * 这应该是个纯函数，否则不可持续
	 * @param  {Array} array [description]
	 * @param  {Number} size  [description]
	 * @return {Array}       [description]
	 */
	cutChunkOfArray(array, size){
		let newArray = [];
		for(let i = 0; i < size; i ++){
			newArray.push(array.shift());
		}
		return newArray;
	}

	render(){
		const skills = JSON.parse(JSON.stringify(this.props.skills));
		return (
			<div className="wrapper" onWheel={this.props.onScroll}>
				<h1 className="skills-title">擅长技术</h1>
				<div className="skill-bar">
					{this.cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{this.cutChunkOfArray(skills, 5).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{this.cutChunkOfArray(skills, 3).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{this.cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{this.cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>

			</div>
		)
	}
}

export default SkillsPage