import React from 'react'
import ReactDOM from 'react-dom'

class CoverPage extends React.Component{
	state = {
		pageNumbers: [1,2,3,4]
	}

	render(){
		return (
			<div>
				<li>diamond</li>
				<li>diamond</li>
				<li>diamond</li>
				<li>diamond</li>
				<li>diamond</li>
			</div>
		)
	}
}

export default CoverPage