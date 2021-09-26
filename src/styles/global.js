import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

   :root{
       --black: #000000;
       --white:#fff;
       --purple:#635480;
   }

   body{
       background: var(--white);
       color:var(---black);
   }
   body,input,button{
        font-family: 'Roboto Condensed', sans-serif;
        font-size:1rem;
   }
   h1,h2,h3,h4{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 80px;
   }
   button{
       cursor:pointer;
   }
   a {
       text-decoration: none;
   }
`