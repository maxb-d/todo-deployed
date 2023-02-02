import Header from "./components/Overlay/Header";
import Navbar from "./components/Overlay/Navbar";
import TodoApp from "./components/Todos/TodoApp";

function App() {
  return (
    <div className="App">
      <Header 
        username={'mbaude'}
        currentTab={'Todos'}
      />
      <div className="body-container">
        <Navbar />
        <div className="app-container">
          <TodoApp 
            pendingTodos={1}
            completedTodos={1}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
