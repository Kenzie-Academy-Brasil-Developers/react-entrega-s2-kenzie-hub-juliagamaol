import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 250px;
    padding: 16px;
    border: 1px solid var(--black);
    color: var(--black);

    #concluir{
        margin-top: 100px;
    }

    #titulo, #status{
        font-size: 2rem;
    }
`