import React from "react";
import { connect } from "react-redux";



import AdderOfTasks from "./components/AdderOfTasks";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";




import { addTask, toggleTask, deleteTask, searchTask, changeActiveFilter } from "./actions/actions"

class ToDo extends React.Component {
	state = {
		addTaskInputValue: ""
	}
	addTask = ({ type, key }) => {
		const { addTask } = this.props;
		const { addTaskInputValue } = this.state;
		if (type === "click" || key === "Enter") {
			if (addTaskInputValue.length > 3) {
				addTask(addTaskInputValue);
				this.setState({
					addTaskInputValue: ""
				})
			}
			else {
				this.setState({
					addTaskInputValue: "More than 3 letters!"
				})
			}
		}
	}
	setInputValueToState = ({target}) => {
		const { name, value } = target;
		this.setState({
			[name]: value
		})
	}
	render() {
		const { addTaskInputValue } = this.state;
		const { tasks, activeFilter, toggleTask, deleteTask, searchTask, changeActiveFilter } = this.props;
		return (
			<div className="wrapper_md flex-center flex-column d-flex">
				<h1 className="ui header">To-do application</h1>
				<div className="ui tall stacked segment full-width">
					<AdderOfTasks 
						addTask={this.addTask}
						addTaskInputValue={addTaskInputValue}
						setInputValueToState={this.setInputValueToState}
						searchTask={searchTask}
					/>
					<TaskList deleteTask={deleteTask} toggleTask={toggleTask} tasks={tasks} />
					<Footer changeActiveFilter={changeActiveFilter} activeFilter={activeFilter} />
				</div>
			</div>
		)
	}
}

function filterTasks(tasks, searchInputValue, activeFilter) {
	let filteredTasks;
	switch (activeFilter) {
		case "all":
			filteredTasks = tasks;
			break;
		case "done":
			filteredTasks = tasks.filter(item => item.isCompleted)
			break;
		case "in-progress":
			filteredTasks = tasks.filter(item => !item.isCompleted)
			break;
		default: 
			filteredTasks = tasks
			break;
	}
	return filteredTasks.filter(task => task.name.toLowerCase().includes(searchInputValue.toLowerCase()));
}

export default connect(
	(state) => {
		const {tasks, searchInputValue, activeFilter} = state.todo;
		return {
			activeFilter: activeFilter,
			tasks: filterTasks(tasks, searchInputValue, activeFilter),
			searchInputValue: searchInputValue
		}},
	{ addTask, toggleTask, deleteTask, searchTask, changeActiveFilter }
)(ToDo);
