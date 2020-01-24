import React from 'react';
import { connect } from 'react-redux';

//This is actually really fun
import Loader from 'react-loader-spinner';

import { fetchData } from '../actions';

const Data = props => {
    return (
        <div>
            <button onClick={props.fetchData}>FUNNY BUTTON</button>
            {!props.data && !props.isLoading && (
                <h2>Want to know a joke?</h2>
            )}
            {props.isLoading && (
                <Loader
                    type="Hearts"
                    color="DeepPink"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            {props.data && !props.isLoading && <div>
                <h2>{props.data.setup}</h2>
                <h2>{props.data.punchline}</h2>
            </div>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        data: state.data,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(Data);
