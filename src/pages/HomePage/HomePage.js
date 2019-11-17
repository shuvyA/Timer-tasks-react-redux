import React, { Component } from 'react';


import './HomePage.css';
import AddTask from '../../components/AddTask/AddTask'
import TaskList from '../../components/TaskList/TaskList'

import { connect } from 'react-redux';
import { addNewTask, playTask, pauseTask, startTimer } from '../../actions/task';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    addNewTaskLIst = (titleTask) => {
        this.props.addNewTask(titleTask);
    }

    playTimerById = (taskId) => {
        // if play task -  stop task 
        if (this.props.currTaskPlayId) {
            this.stopTimer()
        }
        let intervalId = setInterval(() => { this.props.startTimer(taskId) }, 1000);
        let payload = {
            interval: intervalId,
            taskId: taskId
        }
        this.props.playTask(payload)
    }

    stopTimer = () => {
        this.props.pauseTask()
        clearInterval(this.props.interval)
    }
    render() {

        return (
            <div className="home-cont">
                <h1>Timer-Tasks</h1>
                <AddTask newTitleTask={this.addNewTaskLIst} />
                <TaskList currTaskPlayId={this.props.currTaskPlayId} tasks={this.props.tasks} playOrPauseById={this.playTimerById} stopTimer={this.stopTimer} />
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        tasks: state.tasks.tasks,
        currTaskPlayId: state.tasks.currTaskPlayId,
        interval: state.tasks.interval
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (name) => {
            dispatch(addNewTask(name))
        },
        pauseTask: (taskId) => {
            dispatch(pauseTask(taskId))
        },
        playTask: (idAndIntervalObj) => {
            dispatch(playTask(idAndIntervalObj))
        },
        startTimer: (taskId) => {
            dispatch(startTimer(taskId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)