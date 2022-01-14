import styled from "styled-components";

function Input({ handleChange }) {
  return (
    <StyledInput onChange={handleChange} placeholder="Enter calories manually" />
  );
}

export default Input;

const StyledInput = styled.input`
background-color: #e9c46a`