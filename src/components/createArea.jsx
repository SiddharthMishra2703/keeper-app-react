import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


function CreateArea(props) {
    const [isExpand, setExpand] = useState(false);

    const [formValue, setFormValue] = useState({
        title: "",
        content: ""
    });

    function expand() {
        setExpand(true);
    }

    function handelChange(e) {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    function handelClick(e) {
        e.preventDefault();
        props.addNote(formValue);
        setFormValue({title:"", content:""});
    }

    return (
        <div>
            <form className="create-note">
                {isExpand && <input onChange={handelChange} value={formValue.title} name="title" placeholder="Title" />}
                <textarea onClick={expand} onChange={handelChange} value={formValue.content} name="content" placeholder="Take a note..." rows={isExpand ? "3" : "1"} />
                <Zoom in={isExpand}>
                    <Fab onClick={handelClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
