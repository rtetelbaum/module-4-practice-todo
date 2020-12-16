import React from 'react';
import '../App.css';
import TaskComponent from '../Components/TaskComponent'

function CategoryContainer(props) {

	const localClick = (event) => {
		props.categoryClick(event.target.name)
	}

	const selectedTasks = props.tasks.filter(task => task.category === props.category)
	const renderTasks = selectedTasks.map(task => <TaskComponent task={task} category={props.category} key={task.id}/>)

	return (
		<div className="categories">
			<h5>Category filters</h5>
			<button className="categories" onClick={localClick} name="All">All</button>
			<button className="categories" onClick={localClick} name="Code">Code</button>
			<button className="categories" onClick={localClick} name="Food">Money</button>
			<button className="categories" onClick={localClick} name="Money">Money</button>
			<button className="categories" onClick={localClick} name="Misc">Misc</button>
			<h5>Tasks</h5>
			{renderTasks}
		</div>
	)
}

export default CategoryContainer;