import styled from 'styled-components';

const SingInDiv = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;

  p {
    margin-top: 7rem;
    font-size: 2rem;
    color: white;
  }

  input {
    width: 20rem;
    height: 2.5rem;
    border: 2px solid rgb(244,48,77);
    color: white;
    padding-left: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    background-color: inherit;
    border-radius: 2rem;
    outline: none;
  }

  button {
    width: 10rem;
    height: 3rem;
    border: 2px solid rgb(244,48,77);
    color: white;
    text-align: center;
    font-size: 1.5rem;
    background-color: inherit;
    border-radius: 2rem;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: rgb(244,48,77);
    }
  }
`;

export {SingInDiv};