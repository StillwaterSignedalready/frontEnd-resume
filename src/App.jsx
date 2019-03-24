import React, { useState, useEffect, useRef } from 'react'
import CoverPage from './CoverPage.jsx'
import ProjectPage from './ProjectPage.jsx'
import SkillsPage from './SkillsPage.jsx'
import './App.css'

/**
 * @readonly
 * @type {{name:string, link:string, description:string}[]} */
const projects = [
  {
    name: 'demos_lab',
    link: 'https://github.com/StillwaterSignedalready/demos_lab',
    description: '实验室,内容有:算法(各种排序+)、node.js、typescript'
  },
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
    name: '其他',
    link: '',
    description: '另外存有一些百度前端技术学院的demo，暂时没怎么整理'
  },

];
/** @readonly */
const skills = ['html', 'css', 'JavaScript(es6+)', 'PhotoShop', 'React.js', 'redux', 'jQuery', 'webpack', 'node(koa)', 'Adobe illustrator', '设计排版', 'mysql', '计算机组成原理', '其他后端语言']
/** @readonly */
const pageCount = 3;

function App () {
  const [currPage, setCurrPage] = useState(0)
  const classNames = Array(pageCount).fill('previous-page');
  const flipSwitch = useRef(true)
  classNames[currPage] = '';
  useEffect(() => {
    console.log('add listenner!')
    const wheelListener = event => {
      if (flipSwitch.current) {
        if(event.deltaY > 0){
          setCurrPage((currPage + 1) % pageCount);
        }
        if(event.deltaY < 0){
          if(currPage > 0){
            setCurrPage(currPage - 1)
          }
        }
        flipSwitch.current = false;
        setTimeout(() => {flipSwitch.current = true;}, 1000);
      }
    };
    window.addEventListener('wheel', wheelListener);
    // 在下次更新 hook前运行return的函数
    return () => {console.log('rm listenner!'),window.removeEventListener('wheel', wheelListener)}
  }, [currPage]);
  return (
    <div>
      <CoverPage className={classNames[0]} />
      <ProjectPage className={classNames[1]} projects={projects} />
      <SkillsPage className={classNames[2]} skills={skills} />
    </div>
  )
}

export default App