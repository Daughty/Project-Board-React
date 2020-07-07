import styled from  'styled-components';

const StyledInput = styled.input`
width:${props=>{
    if(props.custom_type === 'createIssue') return '250px';
    if(props.full_width) return '500px';
    if(props.custom_type === 'dueDate') return '280px';
    if(props.custom_type === 'editName') return '110px';
    return '100px';
}};
height:20px;
border:${props=>(props.custom_type === 'editName'?'none':'1px solid #ccc')};
border-radius:5px;
outline:${props=>(!props.custom_type === 'editName'?'none':'')};
color:${props=>(props.custom_type === 'editName'?'#495466':'')};
font-size:18px;
padding:10px;
margin:${props=>{
    if(props.custom_type==='editName') return '4px';
    if(props.custom_type === 'createIssue') return '';
    return '10px';
}};
background-color:${props=>{
    if(props.custom_type==='editName') return 'transparent';
    if(props.custom_type === 'createIssue') return '';
    return '#F4F5F7';
}};
transition:'width 2s';

&:hover{
cursor:${props=>(props.custom_type === 'editName'?'grab':'pointer')};
background-color:${props=>(props.custom_type==='editName')?'#ededed':''};
}

&:focus{
width:${props=>{
    if(props.full_width) return '600px';
    if(props.custom_type === 'editName') return '90%';
    return '';
}};
height:${props=>{
    if(props.custom_type === 'createIssue') return '60px';
    return '';
}};
background-color:#fff;
}

@media(max-width:768px){
    &:focus{
    width:${props=>{
        if(props.custom_type === 'editName') return'45%';
        return ''
    }};
    }
    width:${props=>{
        if(props.custom_type === 'createIssue') return '100%';
        return '';
    }};
    margin:${props=>{
        if(props.custom_type === 'createIssue') return '5px';
        return '';
    }};
}
`


export default StyledInput;