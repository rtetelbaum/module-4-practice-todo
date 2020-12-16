import React from 'react';
import './App.css';
import CategoryContainer from './Containers/CategoryContainer';

class App extends React.Component {

  state = {
		tasks: [],
		category: "All",
		newTaskValue: ""
	}
	
	componentDidMount() {
		fetch('http://localhost:4000/tasks')
			.then(response => response.json())
			.then(data => this.setState({tasks: data}))
	}

	categoryClick = (categoryName) => {
		this.setState({category: categoryName})
	}

	changeNewTaskValue = (e) => {
		this.setState({newTaskValue: e.target.value})
	}

	addNewTask = (e) => {
		e.preventDefault()
		const data = {
			"text": this.state.newTaskValue,
			"category": e.target.category.value
		}

		fetch('http://localhost:4000/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			})
				.then(response => response.json())
				.then(data => {
					console.log('Success:', data)
					this.setState(prevState => ({tasks: [...prevState.tasks, data]}))
				})
	}

	deleteTask = (id) => {
		fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'DELETE'
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data)
				this.setState(prevState => ({tasks: [...prevState.tasks.filter(task => task.id !== id)]}))
			})
	}

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
				<CategoryContainer tasks={this.state.tasks} categoryClick={this.categoryClick} 
					category={this.state.category} newTaskValue={this.state.newTaskValue}
					changeNewTaskValue={this.changeNewTaskValue} addNewTask={this.addNewTask} 
					deleteTask={this.deleteTask}
				/>
      </div>
    )
  }
}

export default App;