import React, { useState } from 'react';
import './create.css';

const Create = (props) => {

    const { onChange } = props
    const [dataCreate, setDataCreate] = useState('')

    const Onsumbit = (event) => {
        event.preventDefault()
        const neData = {
            id: Math.floor(Math.random() * 100) + 1,
            title: dataCreate
        }
        // console.log("hit", neData);
        onChange(neData)
    }
    console.log("create", dataCreate);
    return (

        <form className='Create' onSubmit={Onsumbit}>
            <input type="text" onChange={e => setDataCreate(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}

export default Create;