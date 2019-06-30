import React from "react";

const Task = ({name, isCompleted, id, toggleTask, deleteTask}) => (
	<div className="ui segment purple d-flex justify-content-between" checked={isCompleted}>
		<div onClick={() => toggleTask(id)}>
			<i className={isCompleted ? "icon check circle outline icon_disabled" : "icon circle outline"}></i>
			<span className={isCompleted ? "task-name task-name_disabled" : "task-name"}>{name}</span>
		</div>
		<i onClick={() => deleteTask(id)}className="icon x"></i>
	</div>
)

export default Task;