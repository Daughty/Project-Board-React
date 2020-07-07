import styled from  'styled-components';

export const DropDownContainer = styled.div`
width:150px;
margin: 0 auto;
position:absolute;
top:4px;
right:-15px;
&:selection{
  background:transparent;
}
`

export const DropDownList = styled.ul`
padding: 0;
margin: 0;
background: #ffffff;
border: 1px solid #ccc;
border-radius:5px;
box-sizing: border-box;
color: #3faffa;
font-size: 12px;
font-weight: 600;
height:120px;
width:60%;
text-align:left;
&:first-child {
  padding-top: 5px;
}
box-shadow:${props=>{
  if(props.isOpen===true) return '0px 2px 6px 0px #e4e4e4';
  return '0px 2px 6px 0px #e4e4e4';
}};
&:selection{
  background:transparent;
}
`

export const ListItem = styled.li`
list-style: none;
margin-bottom: 5px;
padding:5px;
color:#111;

&:hover{
  background-color:#F0F0F0;
}
&:selection{
  background:transparent;
}
`

