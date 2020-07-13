import styled from 'styled-components';
import { version } from 'punycode';


export const Label = styled.label`
font-size:${props=>{
    if(props.custom_type==='proj_title')return '24px;'
    if(props.custom_type==='drop_head') return '12px';
    if(props.custom_type==='percen') return '12px';
    if(props.custom_type==='due_date_label') return '12px';
    return '16px'
}};
font-weight:${props=>{
    if(props.custom_type==='drop_head') return '400';
    if(props.custom_type==='percen' || props.custom_type==='proj_title') return '600';
    return '';
}};

margin:${props=>{
    if(props.custom_type==='proj_title') return '10px 10px 5px 0px';
    if(props.custom_type==='drop_head') return '2px 0px 0px 5px';
    if(props.custom_type==='percen') return '-2px -100px 0px -34px';
    if(props.custom_type==='due_date_label') return '0px 5px 0px 0px';
    return '';
}};
color:${props=>{
    if(props.custom_type==='drop_head' || props.custom_type==='due_date_label') return '#111';
    if(props.custom_type==='percen') return '#fff';
    if(props.custom_type==='proj_title') return '#505050';
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
}};

padding:${props=>{
    if(props.custom_type==='app_title') return '0px 23px';
    return '';
}}
}

@media (max-width: 768px) {
font-size:${props=>(props.custom_type==='proj_title')?'18px;':'16px'};
}

`
export const Ul = styled.ul`
margin:${props=>{
    if(props.custom_type==='side_wrap_ul') return '15px';
    if(props.custom_type==='nav_wrap_ul' && props.versionTwo) return '10px 20px';
    if(props.custom_type==='nav_wrap_ul') return '10px -6px';
    return '';
}}; 
padding:${props=>{
    if(props.custom_type==='side_wrap_ul'||
    props.custom_type==='nav_wrap_ul'
    ) return '0px';
    return '';
}};
display:flex;
flex-direction: ${props=>{
    if(props.custom_type==='side_wrap_ul') return 'column';
    return 'row';
}}; 

`
export const Li = styled.li`
font-size:${props=>{
    if(props.custom_type==='nav_wrap_li') return '16px';
    return '';
}}; 

padding:${props=>{
    if(props.custom_type==='side_wrap_li') return '20px';
    if(props.custom_type==='nav_wrap_li') return '4px';
    return '';
}}; 
margin:${props=>{
    if(props.custom_type==='side_wrap_li' && props.active) return '0px -8px 0px 0px';
    if(props.custom_type==='nav_wrap_li') return '0px 40px 0px 0px';
    return '';
}};
background-color:${props=>{
    if(props.custom_type==='side_wrap_li' && props.active) return '#fff';
    return '';
}};

border-radius:${props=>{
    if(props.custom_type==='side_wrap_li' && props.active) return '4px';
    return '';
}};
border-bottom:${props=>{
    if(props.custom_type==='nav_wrap_li' && props.active) return '2px solid #813186';
    return '';
}};

list-style-type:${props=>{
    if(props.custom_type==='side_wrap_li' ||
    props.custom_type==='nav_wrap_li'
    ) return 'none';
    return '';
}};


&:hover {
    cursor:pointer;
    background-color:${props=>{
        if(props.custom_type==='nav_wrap_li'
        ) return '#813186';
        return '';
    }};
    border-radius:${props=>{
        if(props.custom_type==='nav_wrap_li'
        ) return '5px';
        return '';
    }};
   
    color:${props=>{
        if(props.custom_type==='nav_wrap_li') return '#fff';
        return '';
    }};
    
    
}
`

