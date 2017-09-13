import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component{
	constructor(){
		super()
		this.state = {
			filter: null
		}
	}

	filterList(ev){
		let filter = ev.target.value
		setTimeout(() => {
			this.setState({
				filter: filter
			})
		}, 1000)
	}

	render(){
		return (
			<div>
			<SearchBar onChange={ this.filterList.bind(this) }/>
			<ProductTable products={this.props.store} filter={this.state.filter}/>
			</div>
			)
	}
}