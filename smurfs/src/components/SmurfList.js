import React from 'react';
import { connect } from 'react-redux'

import Smurf from './Smurf'

const SmurfList = (props) => {

    return (
        <div>
            <h3>THA SMURF LIST BOI</h3>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList);