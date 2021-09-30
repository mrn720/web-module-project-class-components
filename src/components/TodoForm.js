import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        }
    }
    handleChanges = e => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToList(this.state.newItem);
        this.setState({
            ...this.state,
            newItem: ''
        })
    };



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Enter Task' onChange={this.handleChanges} value={this.state.newItem} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;