import {useState} from 'react';

const Sample3 = () => {
    const [name, setName]= useState('John Doe');

    const changeName =()=>{
        setName('Mary Doe');
    }

    return (
        <div>
            <h1>My name is:{name}</h1>
            <button onClick={changeName}>Click me to change</button>
        </div>
    )
}
export default Sample3;