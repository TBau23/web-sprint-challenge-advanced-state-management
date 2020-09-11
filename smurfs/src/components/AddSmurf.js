import React from 'react';
import { connect } from 'react-redux'
import { useState } from 'react';

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const AddSmurf = ({formValues}) => {

    const [textInput, setTextInput] = useState(initialFormValues)

    const handleChange = e => {
        e.preventDefault()
        setTextInput(e.target.id)
        console.log(textInput)
    }
    return(
        <div>
            <label>Enter Smurf Name: &nbsp;
                <input
                type = 'text'
                id='name'
                value={formValues.name}
                onChange={handleChange}

                />
            </label>
            <label>Enter Smurf Age: &nbsp;
                <input
                type = 'text'
                id='age'
                value={formValues.age}
                />
            </label>
            <label>Enter Smurf Height in cm: &nbsp;
                <input
                type = 'text'  
                id='height'
                value={formValues.height}
                
                />
            </label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formValues: state.formValues
    }
}

export default connect(mapStateToProps, {})(AddSmurf);