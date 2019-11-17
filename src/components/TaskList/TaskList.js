import React, { Component } from 'react';


import './TaskList.css';

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titleTask: null,
            taskPlay: false
        }
    }
    playTask = (taskId) => {
        this.setState({ taskPlay: true });
        this.props.playOrPauseById(taskId)
    }
    stopTask = (taskId) => {
        this.setState({ taskPlay: false });
        this.props.stopTimer(taskId)
    }

    buttonPlayOrStop = (taskId) => {
        if (this.props.currTaskPlayId === taskId) {
            return <button className="btn-generic play" onClick={() => this.stopTask(taskId)}>STOP</button>
        } else {
            return <button className="btn-generic play" onClick={() => this.playTask(taskId)}>Play</button>
        }
    }
    calcTotal = () => {
        if (this.props.tasks.length > 0) {
            let total = this.props.tasks.reduce((a, b) => ({ seconds: a.seconds + b.seconds }));
            // format sec to m:ss
            let res = this.fmtMSS(total.seconds)
            return res;
        } else return '0:00'
    }

    // fn - format sec to m:ss
    fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
    }

    render() {
        return (
            <div className="">
                <div>
                    {this.props.tasks.length > 0?  <div className="flex  space around tasks-title">
                        <span className="name">name</span>
                        <span className="time">time</span>
                        <span className="play">Play</span>
                    </div> : ''}

                    {this.props.tasks.map((task, idx) =>
                        <div className="flex space around align-center task-list" key={idx}>
                            <span className="name">{task.title}</span>
                            <span className="time">{this.fmtMSS(task.seconds)}</span>
                            {this.buttonPlayOrStop(task.id)}
                        </div>)
                    }

                </div>
                <div>
                    <hr />
                    TOTAL:  {this.calcTotal()}
                </div>
            </div>
        )
    }

}

export default TaskList;