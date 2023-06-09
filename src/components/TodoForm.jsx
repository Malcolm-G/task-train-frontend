import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function TodoForm(props) {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [due,setDue] = useState('')
    const navigate = useNavigate()
    const [user,setUser,API,todos,setTodos] = useContext(UserContext)

    const input={id:todos[todos.length-1].id+1,title:title,description:description,status:'CREATED',priority:'LOW'}

    function projectSubmit(e){
        e.preventDefault()
            setTodos((todos)=>[...todos,input])
            window.alert("New Project Created")
            navigate("/my-todos");
    }

    function cancelClicked(){
        navigate("/my-todos");
    }

    return (
        <form className='log-form' onSubmit={(e)=>projectSubmit(e)} style={{border:"1px solid #ccc"}}>
            <div className="container bg-body-tertiary mt-5">
                <h1>Todo Details</h1>
                <p>Please fill in this form to add a new todo.</p>
                <hr/>

                <label htmlFor="title"><b>Title</b></label>
                <input
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                type="text" placeholder="Enter Todo Title" name="title" required/>

                <label htmlFor="description"><b>Description</b></label>
                <input
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                type="text" placeholder="Enter Todo Description" name="description" required/>

                <label htmlFor="due"><b>Due Date</b></label>
                <input
                onChange={(e)=>setDue(e.target.value)}
                value={due}
                type="date" placeholder="Enter Due Date" name="due" required/>


                <div className="clearfix">
                <button type="submit" className=".log-signupbtn">Create Todo</button>
                <button type="button" className=".log-cancelbtn bg-danger" onClick={cancelClicked} >Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default TodoForm;