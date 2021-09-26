import styled from 'styled-components'
import { keyframes } from 'styled-components'
import FormLoginImage from '../../images/login.svg'
export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`
export const Background = styled.div`
    @media(min-width:1140px){
        flex: 1;
        background: url(${FormLoginImage}) no-repeat center;
        background-size: contain;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`
const appearFromRight = keyframes`
    from{
        opactiy:0;
        transform:translateX(50px)
    }
    to{
        opactiy:1;
        transform:translateX(0px)
    }
`
export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form{
        margin: 80px 0;
        width: 340px;
        text-align:center;

        h2{
            margin-bottom: 32px;
            font-size:50px;
            font-weight: normal;
        }
        div{
            margin-top: 10px;
        }
        p{
            margin-top: 8px;
        }
       
        a{
            font-weight: bold;
            color: var(--purple);
            margin-left: 10px;

        }
    }
`
