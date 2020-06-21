import React, { Component } from 'react';
import Header from '../header';
import Form from '../form';
import TodoList from '../todo-list';
import Footer from '../footer';

class Main extends Component {
	constructor() {
		super()
		this.state = {
			task: '',
			list: [],
			index: -1
		}
		this.addTask = this.addTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	componentDidMount() {
		const list = JSON.parse(localStorage.getItem('list'));

		if(!list) return 

		this.setState({ list })
	}
	componentDidUpdate(prevProps, prevState) {
		const { list } = this.state
		if(list === prevState.list) return 

		localStorage.setItem('list', JSON.stringify(list));
	}

	addTask(e) {
		e.preventDefault();
		
		const { list, index } = this.state;
		let { task } = this.state

		if(list.indexOf(task) !== -1) return;
		
		const newList = [...list];
		if(index === -1) {
			this.setState({
				list: [...newList, task],
				task: ''
			})
		} else {
			newList[index] = task;
			this.setState({
				list: [...newList],
				index: -1
			})
		}
	}
	editTask(e, index) {
		const { list } = this.state;
		this.setState({
			index,
			task: list[index]
		})
	}
	deleteTask(e, index) {
		const { list } = this.state;
		const newList = [...list];
		newList.splice(index, 1);
		this.setState({list: [...newList]});
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<Form
						handleSubmit={this.addTask} 
						handleChange={(e) => this.setState({task: e.target.value})} 
						task={this.state.task}	
						placeholder="Your Task" 
					/>
                    <TodoList list={this.state.list} editTask={this.editTask} deleteTask={this.deleteTask}/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
