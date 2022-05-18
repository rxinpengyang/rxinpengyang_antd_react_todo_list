import React from "react";
import TodoFom from "./TodoFom";
import TodoList from "./TodoList";

class App extends React.Component {
    state = {
        todos: [
            {id: 0, info: "Getting started"},
            {id: 1, info: "Lorem ipsum"},
            {id: 2, info: "Dolor sit amet"}
        ]
    }

    handleSubmit = (newTodo) => {
        this.setState({
            todos: [{id: this.state.todos.length + 1, info: newTodo}, ...this.state.todos]
        })
    }

    handleClearAll = () => {
        this.setState({
            todos: []
        })
    }

    handleEdit = (id) => {
        console.log(id)
    }

    handleDelete = (id) => {
        const updatedTodos = this.state.todos.filter((todo) => todo.id !== id)
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        return (
            <div>
                <TodoFom
                    todos={this.state.todos}
                    onSubmit={this.handleSubmit}
                    onClearAll={this.handleClearAll}
                />
                <TodoList
                    todos={this.state.todos}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default App;
