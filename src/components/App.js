import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: ${props => (props.primary ? 'palegreen' : 'palevioletred')}};
    border: ${props =>
    props.primary ? '2px solid palegreen' : '2px solid palevioletred'};
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5em all ease-out;

    &:hover {
        color: white;
        background-color: ${props =>
        props.primary ? 'palegreen' : 'palevioletred'};
    }
`;

function App() {
    return (
        <div>
            <h1>Hello IG Clone</h1>
            <Button> Styled Button Component</Button>
            <Button primary> Primary Btn </Button>
        </div>
    )
}


export default App