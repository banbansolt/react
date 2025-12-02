import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #2c3e50;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    font-align: center;
`;

const blockItems = [
    {
        label: "Block 1",
        padding: "1rem",
        backgroundColor: "pink"
    },
    {
        label: "Block 2",
        padding: "1rem",
        backgroundColor: "navy"
    },
    {
        label: "Block 3",
        padding: "1rem",
        backgroundColor: "skyblue"
    }
]

function Blocks(props) {
    return(
        <Wrapper>
            {blockItems.map((blockItem) => {
                return(
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })
            }
        </Wrapper>
    );
}

export default Blocks;