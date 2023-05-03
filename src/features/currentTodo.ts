import { Action } from 'redux';
import { Todo } from '../types/Todo';

type RemoveTodoAction = { type: 'currentTodo/REMOVE' };

type SetTodoAction = {
  type: 'currentTodo/SET';
  payload: Todo;
};

const removeTodo = (): RemoveTodoAction => ({ type: 'currentTodo/REMOVE' });

const setTodo = (todo: Todo): SetTodoAction => ({
  type: 'currentTodo/SET',
  payload: todo,
});

export const actions = { setTodo, removeTodo };

type State = Todo | null;
type ActionsTodo = SetTodoAction | RemoveTodoAction;

const currentTodoReducer = (
  state: State = null,
  actionTodo: Action,
): State => {
  const action = actionTodo as ActionsTodo;

  switch (action.type) {
    case 'currentTodo/SET':
      return action.payload;
    case 'currentTodo/REMOVE':
      return null;

    default:
      return state;
  }
};

export default currentTodoReducer;