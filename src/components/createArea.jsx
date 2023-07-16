import React, {useState} from "react";

function CreateArea(props) {
    const [formValue, setFormValue] = useState({
        title: "",
        content: ""
    });
    
    function handelChange(e) {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                props.addNote(formValue);
                setFormValue({title:"", content:""});
            }}>
                <input onChange={handelChange} value={formValue.title} name="title" placeholder="Title" />
                <textarea onChange={handelChange} value={formValue.content} name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
