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
				name: 'myReads',
				link: 'https://github.com/StillwaterSignedalready/uda-my-reads',
				description: '用creat-react-app开发的书架应用'
			},
			{
				name: 'uda-map-app',
				link: 'https://github.com/StillwaterSignedalready/uda-map-app',
				description: '借助google map API开发，载入API的place库以抓取地点数据,使用框架knockout'
			},
			{
				name: 'Arcade-Game',
				link: 'https://stillwatersignedalready.github.io/Arcade-Game/',
				description: '用canvas再现青蛙过河游戏'
			},
			{
				name: 'Memory Game',
				link: 'https://stillwatersignedalready.github.io/Memory-game-of-Udacity/',
				description: '记忆翻卡游戏'
			},
			{
				name: 'demos_lab',
				link: 'https://github.com/StillwaterSignedalready/demos_lab',
				description: '只是用来存放实验品的仓库，其中有试验redux的demo'
			},
			{
				name: '其他',
				link: '',
				description: '另外存有一些百度前端技术学院的demo，暂时没怎么整理'
			},

		],
		skills: ['html5', 'css', 'JavaScript(es6)', 'PhotoShop', 'React.js', 'redux', 'knockout.js', 'jQuery', 'webpack', 'gulp', 'Adobe illustrator', '设计排版', 'AutoCAD', 'SketchUp']
	}

	filpPage = (event) => {
		console.log(this.state.currentPage);
		if(event.deltaY > 0){
			this.setState({currentPage: (this.state.currentPage + 1) % 3});
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
		const classNames = ['previous-page','previous-page','previous-page'];
		classNames[this.state.currentPage] = '';

		return (
			<div>
				<CoverPage className={classNames[0]} />
				<ProjectPage className={classNames[1]} projects={this.state.projects} />
				<SkillsPage className={classNames[2]} skills={this.state.skills} />
			</div>
		)
	}

}

export default App