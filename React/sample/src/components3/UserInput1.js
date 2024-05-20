import{useState} from 'react';
const UserInput1=() =>{
const[firstname, SetFirstname]=useState('');
const[lastname, SetLastname]=useState('');
const[course, SetCourse]=useState('');

return(
<div>
<form>

<label>Firstname</label>
<input type="text"name="firstname"value={firstname}onChange={(e)=>SetFirstname(e.target.value)}placeholder="enter your last name"/><br/>

<label>lastname</label>
<input type="text"name="lastname"value={lastname}onChange={(e)=>SetLastname(e.target.value)}placeholder="enter your last name"/><br/>
<label>course</label>
<input type="text"name="course"value={course}onChange={(e)=>SetCourse(e.target.value)}placeholder="enter your last name"/><br/>
<button>Save Details</button>
<p>{firstname}</p>
<p>{lastname}</p>
<p>{course}</p>
</form>
</div>



    
);



}
export default UserInput1 ;