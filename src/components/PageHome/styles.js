import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    height: 100vh;

`
export const Content = styled.div`
    max-width: 400px;

    div{
        flex: 1;
        display: flex;
        margin-top: 1rem;
    }
    #btn{
        margin-left: 1.5rem;
        margin-top: 16px;
    }
`