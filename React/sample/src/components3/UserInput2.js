import { useState } from "react" ;

const UserInput2 = () => {
    const [data,setData]=useState({
        firstname: '',
        lastname: '',
        course: ''
    })
    const handleInput=(e)=>{
        const {name,value}= e.target;
        setData ((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const handleSubmit=(e)=>{
        //code handle submit
    }
    return(
       <div>
        <form onSubmit={handleSubmit}>
        <label>Firstname</label>
        <input type="text"name="firstname"onChange={handleInput} placeholder="enter your last name"/><br/>
        <label>lastname</label>
        <input type="text"name="lastname"onChange={handleInput}placeholder="enter your last name"/><br/>
        <label>course</label>
        <input type="text"name="course"onChange={handleInput}placeholder="enter your last name"/><br/>
        <button>Save Details</button>
        <p>{data.firstname}</p>
        <p>{data.lastname}</p>
        <p>{data.course}</p>
        </form>
       </div> 
    )
}
export default UserInput2 ;