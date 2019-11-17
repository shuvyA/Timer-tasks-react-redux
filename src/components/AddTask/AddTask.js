import React, { Component } from 'react';

import './AddTask.css';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleTask: ''
        }
    }

    handleChange = (val) => {
        this.setState({ titleTask: val.target.value })
    }

    addNewTask = () => {
        // check if valid
        if (this.state.titleTask === '') return;
        this.props.newTitleTask(this.state.titleTask)
        // remove after click Add
        this.setState({ titleTask: '' })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addNewTask()
        }
    }

    render() {

        return (
            <div className="add-task flex space-around">
                <input
                    className="input-generic"
                    placeholder="New Task"
                    value={this.state.titleTask}
                    type="text"
                    onChange={this.handleChange}
                    onKeyDown={this._handleKeyDown} />
                <button className="btn-generic add" onClick={this.addNewTask}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;