import { connect } from "react-redux";
import { TodoList } from "../TodoList";
import { toggleTodo, getVisibleTodos } from "../../actions";

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = ({ dispatch }) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
});

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
