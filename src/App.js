import React from 'react'
import ReactDOM from 'react-dom'
import CoverPage from './CoverPage'
import ProjectPage from './ProjectPage'
import SkillsPage from './SkillsPage'

import './App.css'

class App extends React.Component{
	state = {
		currentPage: 0,
		projects: [
			{
				name: 'p1',
				link: 'http-www.wayne.com',
				description: 'that project'
			},
			{
				name: 'p2',
				link: 'http-www.wayne.com',
				description: 'that project'
			},
			{
				name: 'p3',
				link: 'http-www.wayne.com',
				description: 'that project'
			},
						{
				name: 'p4',
				link: 'http-www.wayne.com',
				description: 'that project'
			},
						{
				name: 'p5',
				link: 'http-www.wayne.com',
				description: 'that project'
			},
						{
				name: 'p6',
				link: 'http-www.wayne.com',
				description: 'that project'
			},

		],
		skills: ['html5', 'css', 'JavaScript(es6)', 'PhotoShop', 'React.js', 'redux', 'knockout.js', 'jQuery', 'webpack', 'gulp', 'Adobe illustrator', '设计排版', 'AutoCAD', 'SketchUp']
	}

	filpPage = (event) => {
		console.log(this.state.currentPage);
		if(event.deltaY > 0){
			this.setState({currentPage: this.state.currentPage + 1});
		}
		if(event.deltaY < 0){
			if(this.state.currentPage > 0){
				this.setState({currentPage: this.state.currentPage - 1});
			}
		}
	}

	componentDidMount(){
		window.addEventListener('wheel', this.filpPage);
	}

	judgeClassName(){
		return 1;
	}

	pickPage(pageNumber, className){
		switch(pageNumber % 3){
			case -1:
				return null;
			case 0:
				return <CoverPage className={className} />
			case 1:
				return <ProjectPage className={className} projects={this.state.projects} />
			case 2:
				return <SkillsPage className={className} skills={this.state.skills} />
		}
	}

	/**
	 * 可模拟一个Queue，return 过去，现在，将来三个页面
	 * 翻页效果间隔时间：设置一个boolean值，翻页需要先if(boolean)，
	 * 翻页是设置为false，setTimeout(复位true,一秒)
	 * boolean是false是不动boolean，是true时toggle它
	 */
	render(){
		return (
			<div>
				{this.pickPage(this.state.currentPage - 1)}
				{this.pickPage(this.state.currentPage)}

			</div>
		)
	}

}

export default App