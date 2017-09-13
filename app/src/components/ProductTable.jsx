import React from 'react'
export default class ProductTable extends React.Component{
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<ProductCategoryRow/>
				<ProductRow/>
				<ProductRow/>
				<ProductRow/>
				<ProductCategoryRow/>
				<ProductRow/>
				<ProductRow/>
			</div>
			)
	}
}