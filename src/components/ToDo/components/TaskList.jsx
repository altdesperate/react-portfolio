import React from "react";

import Task from "./Task"

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
	<div className="ui segments">
		{tasks.map(({name, isCompleted, id}) => (
			<Task deleteTask={deleteTask} toggleTask={toggleTask} id={id} name={name} isCompleted={isCompleted} key={id} />
		))}
	</div>
)

export default TaskList;