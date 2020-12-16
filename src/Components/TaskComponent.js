import React from 'react';
import '../App.css';

function TaskComponent(props) {

	const localDelete = () => {
		props.deleteTask(props.task.id)
	}

	return (
		<div className="tasks">
			<div>
				<div className = "task">
					<div className="label">{props.task.category}</div>
					<div className="text">{props.task.text}</div>
					<button className="delete" onClick={localDelete}>X</button>
				</div>
			</div>
		</div>
	)
}

export default TaskComponent;