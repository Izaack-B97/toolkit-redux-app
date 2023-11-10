import React from 'react'

import { useGetTodoQuery, useGetTodosQuery } from './store/apis'
import { useState } from 'react';

export const TodoApp = () => {
    
    // const { data : todos = [], isLoading } = useGetTodosQuery();
    // console.log( todos );

    const [ todoId, setTodoId ] = useState( 1 );

    const { data : todo, isLoading } = useGetTodoQuery( todoId );

    console.log( todo );

    const previousTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 )
    }
    const nextTodo = () => setTodoId( todoId + 1 );

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr/>

            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify( todo ) }</pre>
            {/* <ul>
                { todos.map(todo => 
                    
                    <li>
                        <strong>{ todo.completed ? 'DONE' : 'Peding' }: </strong>
                        { todo.title }
                    </li>
                )}
            </ul> */}
            <button onClick={ previousTodo }>
                Previous Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>
        </>
    )
}
