import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <p className="team-title">Todo List</p>
        </div>
        <div>
          <div className="todo-main-container">
            <label className="todo-container">
              <p className="input-title">Annual Review Appoinment</p>

              <input type="checkbox" checked="checked" />
              <span className="checkmark"></span>
            </label>
            <button className="todo-button">High</button>
          </div>
          <div className="todo-main-container">
            <label className="todo-container">
              <p className="input-title">Annual Review</p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="todo-button">High</button>
          </div>
          <div className="todo-main-container">
            <label className="todo-container">
              <p className="input-title">Make Withdrawal</p>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="todo-button">High</button>
          </div>
          <div className="todo-main-container">
            <label className="todo-container">
              <p className="input-title">Implement Recomendation</p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="todo-button">High</button>
          </div>
          <div className="todo-main-container">
            <label className="todo-container">
              <p className="input-title">Prepare Review Document</p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="todo-button">High</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
