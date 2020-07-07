import styled from 'styled-components';


const Label = styled.label`
font-size:${props=>{
    if(props.custom_type==='proj_title')return '24px;'
    if(props.custom_type==='drop_head') return '12px';
    if(props.custom_type==='percen') return '12px';
    if(props.custom_type==='due_date_label') return '12px';
    return '16px'
}};
font-weight:${props=>{
    if(props.custom_type==='drop_head') return '400';
    if(props.custom_type==='percen') return '600';
    return '';
}};

margin:${props=>{
    if(props.custom_type==='proj_title') return '10px 10px 40px 10px';
    if(props.custom_type==='drop_head') return '2px 0px 0px 5px';
    if(props.custom_type==='percen') return '-2px -100px 0px -34px';
    if(props.custom_type==='due_date_label') return '0px 20px 0px 0px';
    return '';
}};
color:${props=>{
    if(props.custom_type==='drop_head' || props.custom_type==='due_date_label') return '#111';
    if(props.custom_type==='percen') return '#fff';
    return 'black';
}};
display:${props=>props.hidden?'none':'block'}
&:hover{
cursor:${props=>props.custom_type==='task_name'?'pointer':''};
text-align:${props=>{
    if(props.custom_type==='task_name') return 'justify';
    if(props.custom_type==='drop_head') return 'center';
    if(props.custom_type==='due_date_label') return 'left';
    return '';
}}
}

@media (max-width: 768px) {
font-size:${props=>(props.custom_type==='proj_title')?'18px;':'16px'};
}

`

export default Label;

