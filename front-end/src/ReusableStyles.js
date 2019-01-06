import styled from "styled-components";

// 1. Intellectual Non-chalance
// Light Blue Green: #6ed3cf

// Soft Purple: #9068be

// Tasty Eighties Grey: #e1e8f0

// Rich Red: #e62739

//signup component

export const SignContainer = styled.div`
margin: 0 auto
background: #9068be
width: 20%
display: flex
flex-direction: column
margin-top: 100px
height: 200px
justify-content: space-around
align-items: center
border-radius: 2%
font-size: 2rem
`;
export const FormContainer = styled.form`
display:flex
flex-direction: column
height: 60%
justify-content:space-around
font-size: 2rem
`;

//quotes card
export const QuoteContainer = styled.div`
background: #e1e8f0
height: 250px;
margin: 0 auto;
width:40%;
display: flex;
flex-direction: column
justify-content: space-around
font-size:1.6rem
border-radius: 2.5%;
`;

export const QuoteButton = styled.button`
  width: 25%;
  align-self: center;
  font-size: 1.2rem;
  border-radius: 2.5%;
`;

export const QuoteFont = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
`;
