import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  position: sticky;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0 0 5px 0px;
  background-image: linear-gradient(to right, #3e4c63, #6a88ba, #3e4c63);
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  padding-left: 10px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: "Courier New",monospace;
  padding-top: 15px;
  color: white;
`;

const Button = styled.div`
  text-align: right;
  button {
    margin-top: 20px;
  width: 100px;
  height: 40px;
  background-image: linear-gradient(to right, #3e4c63, #6a88ba, #3e4c63);
  border: 2px solid #111111;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Courier New",monospace;
  font-size: 20px;
  color: white;
  }
`; 

export {Nav, Logo, Title, Button};