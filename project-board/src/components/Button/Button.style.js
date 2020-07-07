import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  border: 2px solid #28a745;
  background-color:#28a745;
  color: white;
  margin: 10px;
  padding: 5px;
  width:100px;
  height:40px;
  outline:none;
  font-size:18px;
  font-family: 'Open Sans', sans-serif;
  text-align:center;

  span {
    font-size:18px;
    padding:12px 10px;
    text-align:center;
  }
  

  &:hover{
      background:#24963e;
      cursor:pointer;
      border:2px solid #24963e;
  }
`

export default StyledButton;