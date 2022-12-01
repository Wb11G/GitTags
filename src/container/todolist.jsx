import './todolist.css';
import List from "../component/list/list";
import Create from '../component/create/create';
import React, { useState } from 'react';

const TodoList = () => {
    const [DataList, setDataList] = useState([
        {
            id: 0,
            title: "your name"

        },
        {
            id: 1,
            title: "yes my name"
        }
    ])
    const Add = (nedata) => {
        setDataList(DataList => [...DataList, nedata])
        console.log("data", nedata)
        console.log("tood", DataList);
    }

    return (
        <div className="App">
            <h1>Bosen</h1>
            <Create
                onChange={Add} />
            <List
                data={DataList} />
        </div>
    )

}

export default TodoList;