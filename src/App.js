import React from 'react'
import ReactDOM from 'react-dom'
import CoverPage from './CoverPage'
import './App.css'

class App extends React.Component{
	state = {
		pageNumbers: [1,2,3,4],
		currentPage: 1
	}

	render(){
		if(this.state.currentPage === 1){
			return (
				<div>
					<CoverPage />
				</div>
			)
		}

	}
}

export default App