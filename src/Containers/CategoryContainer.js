import React from 'react';
import '../App.css';
import TaskComponent from '../Components/TaskComponent'

function CategoryContainer(props) {

	const localClick = (event) => {
		props.categoryClick(event.target.name)
	}

	let selectedTasks = []
	let renderTasks= []

	if (props.category === "All") {
		renderTasks = props.tasks.map(task => <TaskComponent task={task} key={task.id}/>)
	} else {
		selectedTasks = props.tasks.filter(task => task.category === props.category)
		renderTasks = selectedTasks.map(task => <TaskComponent task={task} key={task.id}/>)
	}

	return (
		<div className="categories">
			<h5>Category filters</h5>
			<button className="categories" onClick={localClick} name="All">All</button>
			<button className="categories" onClick={localClick} name="Code">Code</button>
			<button className="categories" onClick={localClick} name="Food">Food</button>
			<button className="categories" onClick={localClick} name="Money">Money</button>
			<button className="categories" onClick={localClick} name="Misc">Misc</button>
			<h5>Tasks</h5>
			{renderTasks}
		</div>
	)
}

export default CategoryContainer;