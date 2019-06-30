import React from "react";

const AdderOfTasks = ({ addTask, searchTask, setInputValueToState, addTaskInputValue }) => (
	<div className="d-flex justify-content-between">
		<div className="ui icon input">
			<input name="addTaskInputValue"
				value={addTaskInputValue}
				onKeyPress={addTask}
				onChange={setInputValueToState}
				type="text"
				placeholder="Add your task"
			/>
			<i onClick={(e) => addTask(e, addTaskInputValue)} className="plus circle icon"></i>
		</div>
		<div className="ui icon input">
			<input name="searchTaskInput"
				onChange={(e) => searchTask(e.target.value)}
				type="text"
				placeholder="Find task"
			/>
		</div>
	</div>
)

export default AdderOfTasks;