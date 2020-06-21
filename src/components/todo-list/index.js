import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './index.css'

const TodoList = ({ list, editTask, deleteTask }) => {
    return (
        <ul className="my-tasks wrap">
            {list.map((item, index) => (
                <li key={index}>
                    {`${index + 1} - ${item}`}
                    <div>
                        <FaEdit onClick={(e) => editTask(e, index)} className="edit"/>
                        <FaWindowClose onClick={(e) => deleteTask(e, index)} className="delete"/>
                    </div>
                </li>
            ))}
            {list.length <= 0 && <span className="no-tasks">No tasks</span>}
        </ul>
    );
};

export default TodoList;