import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              id={`todo-${todo.id}`}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </label>
          </div>
          <Button variant="ghost" size="sm" onClick={() => deleteTodo(todo.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
