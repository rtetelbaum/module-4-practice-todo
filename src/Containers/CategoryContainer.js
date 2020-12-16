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
		selectedTasks = ["All"]
		renderTasks = props.tasks.map(task => <TaskComponent task={task} key={task.id} deleteTask={props.deleteTask} />)
	} else {
		selectedTasks = props.tasks.filter(task => task.category === props.category)
		renderTasks = selectedTasks.map(task => <TaskComponent task={task} key={task.id} deleteTask={props.deleteTask} />)
	}

	return (
		<div className="categories">
			<h5>Category filters</h5>
			<button className={props.category==="All" ? "categories selected" : "categories"} onClick={localClick} name="All">All</button>
			<button className={props.category==="Code" ? "categories selected" : "categories"} onClick={localClick} name="Code">Code</button>
			<button className={props.category==="Food" ? "categories selected" : "categories"} onClick={localClick} name="Food">Food</button>
			<button className={props.category==="Money" ? "categories selected" : "categories"} onClick={localClick} name="Money">Money</button>
			<button className={props.category==="Misc" ? "categories selected" : "categories"} onClick={localClick} name="Misc">Misc</button>
			<h5>Tasks</h5>
			<form onSubmit={props.addNewTask}>
				<input placeholder="New task details" value={props.newTaskValue} onChange={props.changeNewTaskValue} />
					<select name="category">
						<option value="Code">Code</option>
						<option value="Food">Food</option>
						<option value="Money">Money</option>
						<option value="Misc">Misc</option>
					</select>
				<input type="submit" value="Add Task" />
			</form>
			{renderTasks}
		</div>
	)
}

export default CategoryContainer;