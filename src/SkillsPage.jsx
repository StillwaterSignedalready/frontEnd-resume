import React from 'react'
// import './CoverPage.css'

/** @typedef {string[]} stringList */

/**
 * @param {stringList} array 
 * @param {number} size 
 * @return {stringList}
 */
const cutChunkOfArray = (array, size) => {
  let newArray = [];
  for(let i = 0; i < size; i ++){
    const item = array.shift();
    item && newArray.push(item);
  }
  return newArray;
}

/** @param {{skills:stringList,stringList:string}} props */
function SkillsPage (props) {
  const skills = JSON.parse(JSON.stringify(props.skills));
		let className = 'wrapper ' + (props.className || ' ')  ;
		return (
			<div className={className} >
				<h1 className="skills-title">擅长技术</h1>
				<div className="skill-bar">
					{cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{cutChunkOfArray(skills, 5).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{cutChunkOfArray(skills, 3).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
				<div className="skill-bar">
					{cutChunkOfArray(skills, 2).map(skillName => <span className="skill" key={skillName}>{skillName}</span>)}
				</div>
			</div>
		)
}

export default SkillsPage