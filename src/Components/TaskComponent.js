import React from 'react';
import '../App.css';

function TaskComponent(props) {
	return (
		<div className="tasks">
			<div className="task label">{props.task.category}</div>
			<div className="task text">{props.task.text}</div>
		</div>
	)
}

export default TaskComponent;