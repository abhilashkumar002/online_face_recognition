import styled from 'styled-components';

const InputField = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  position: static;
`;

const Input = styled.div`
  text-align: center;
  padding: 20px;
  background:
    radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
    radial-gradient(at 100% 100%,      rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px),
    #2d3d56;
  background-size: 20px 20px;

  input {
    height: 38px;
    width: 400px;
    border: none;
    outline: none;
    font-size: 20px;
    padding-left: 15px;
    color: ${props => props.theme.main ? props.theme.main : "white"};
    font-family: "Courier New",monospace;
    border-radius: 20px 0 0 20px;
    background-image: linear-gradient(to right, #3e4c63, #6a88ba, #3e4c63);
    border-right: 2px solid black;
  }

  button {
    height: 40px;
    width: 100px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    background-color: #3e4c63;
    color: ${props => props.theme.main ? props.theme.main : "white"};
    font-family: "Courier New",monospace;
    &:hover {
      transform: scale(1.1);
    }
    
  }
`;

export {InputField, Input};