import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Todo } from "../../store/interfaces";

import { TodoList } from "../TodoList";

import { toggleTodo, getVisibleTodos } from "../../actions";

interface StoreProps {
  todos: Todo[] | undefined;
}

interface DispatchProps {
  onTodoClick: (id: number) => any;
}

const mapStateToProps = (state): StoreProps => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onTodoClick: id => dispatch(toggleTodo(id))
});

interface Props {
  todos?: any;
  onTodoClick?: any;
}

export const VisibleTodoList = connect<Props>( // Я даже спрашивать не буду, почему это работае, ушло 40 минут
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
