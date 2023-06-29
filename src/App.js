import { useEffect, useState } from "react";
import styles from "./App.module.css";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(TODOS_URL)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
          setTodos(loadedTodos);
        })
        .finally(() => setIsLoading(false));
    }, 1500);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} type="text" className={styles.todoCard}>
            {todo.title}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
