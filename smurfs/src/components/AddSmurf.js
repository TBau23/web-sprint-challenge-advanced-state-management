import React from 'react';
import { connect } from 'react-redux'
import { useState } from 'react';
import { postSmurf } from '../store/actions/smurfActions'

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const AddSmurf = ({postSmurf}) => {

    const [textInput, setTextInput] = useState(initialFormValues)

    const handleChange = e => {
        setTextInput({...textInput, [e.target.id]: e.target.value})
        console.log(textInput)
    }

    const submitHandler = e => {
        e.preventDefault()
        postSmurf(textInput)
        // post smurf
    }

    return(
        <form onSubmit={submitHandler}>
            <label>Enter Smurf Name: &nbsp;
                <input
                type = 'text'
                id='name'
                value={textInput.name}
                onChange={handleChange}

                />
            </label>
            <label>Enter Smurf Age: &nbsp;
                <input
                type = 'text'
                id='age'
                value={textInput.age}
                onChange={handleChange}
                />
            </label>
            <label>Enter Smurf Height in cm: &nbsp;
                <input
                type = 'text'  
                id='height'
                value={textInput.height}
                onChange={handleChange}
                />
            </label>
            <button>Add Smurf to Village</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        formValues: state.formValues,
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, {postSmurf})(AddSmurf);