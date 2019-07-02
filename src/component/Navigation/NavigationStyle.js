import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  position: sticky;
  top:0 ;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0 0 5px 0px;
  z-index: 1;
  background-image: linear-gradient(to right, #3e4c63, #6a88ba, #3e4c63);
  @media screen and (max-width: 460px){
    grid-template-columns: 30% 40% 30%;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  padding-left: 10px;
  @media screen and (max-width: 460px){
    padding-left: 0px;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: "Courier New",monospace;
  color: white;
  line-height:80px;
  @media screen and (max-width: 1000px){
    font-size: 2.3rem
  }
  @media screen and (max-width: 750px){
    font-size: 1.7rem
  }
  @media screen and (max-width: 550px){
    font-size: 1.5rem
  }
  @media screen and (max-width: 460px){
    font-size: 1.5rem;
    line-height: 40px;
  }
`;

const Button = styled.div`
  text-align: right;
  button {
  margin-top: 20px;
  margin-right: 10px;
  width: 6rem;
  height: 40px;
  background-image: linear-gradient(to right, #3e4c63, #6a88ba, #3e4c63);
  border: 2px solid #111111;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Courier New",monospace;
  font-size: 1rem;
  color: white;
  text-align: center;
  outline: none;
  @media screen and (max-width: 460px){
    padding-left: 0px;
  }
  }
`; 

export {Nav, Logo, Title, Button};