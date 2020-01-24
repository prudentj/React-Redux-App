import React from 'react';
import { connect } from 'react-redux';

//This is actually really fun
import Loader from 'react-loader-spinner';

import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { fetchData } from '../actions';

const JokeBox = styled.div`
    margin:5%;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`


const Data = props => {
    return (
        <JokeBox >
            <Button onClick={props.fetchData} variant="contained" >Joke Please!</Button>
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
                <h3>{props.data.punchline}</h3>
            </div>}
        </JokeBox>
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
