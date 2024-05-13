import React from "react";
import TodoList from '../TodoList';
import AppHeder from '../AppHeder';
import SearchBar from '../SearchBar';

const App = () => {
    
    const todos = [
        {label: 'Drink Coffee', important: 'false'},
        {label: 'Learn React', important: 'false'},
        {label: 'Build Awesome Application', important: 'true'},
    ]
    

    return (
        <div>
            <AppHeder />
            <SearchBar />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;