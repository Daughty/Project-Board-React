import styled from 'styled-components';

const Card = styled.div`
display:flex;
flex:${props=>{
    if(props.custom_type==='stat_card') return '1';
    return '';
}};

position:${props=>{
    if(props.custom_type==='stat_header') return 'sticky';
    return '';
}};

top:${props=>{
    if(props.custom_type==='stat_header') return'0';
    return '';
}};

box-sizing: border-box;
flex-direction:${props=>{
    if(props.custom_type==='board_wrap' || 
       props.custom_type==='stat_card'  ||
       props.custom_type==='task_card'  
       ) return'column';
    return '';
}};


align-self:${props=>{
    if(props.custom_type==='stat_card') return 'stretch';
    return '';
}};

background-color:${props=>{
    if(props.custom_type==='task_card' && props.flag)return 'rgb(255, 235, 230,1.1)';
    if(props.custom_type==='task_card')return '#fff';
    if(props.custom_type==='stat_card') return '#F4F5F7';
    return '#F4F5F7';
}};

background-image:${props=>{
    if(props.custom_type==='stat_wrap') return 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)';
    return '';
}};

width:${props=>{
    if(props.custom_type==='task_card') return '100%';
    return '';
}};

min-width:${props=>{
    if(props.custom_type==='stat_card') return '282px';
    return '';
}};

max-width:${props=>{
    if(props.custom_type==='stat_header') return '282px';
    return '';
}};
min-height:${props=>{
    if(props.custom_type==='task_card') return '100px';
    return '';
}};

margin:${props=>{
    if(props.custom_type==='task_card') return'5px';
    if(props.custom_type==='stat_card') return '0px 5px';
    return '';
}};

border:${props=>{
    if(props.custom_type==='task_card' && props.flag)return '1px solid rgb(255, 235, 230)';
    if(props.custom_type==='task_card') return '1px solid #F4F5F7'; 
    return '';
}};
border-bottom:${props=>{
    if(props.custom_type==='stat_header') return 'none';
    return '';
}};

border-radius:${props=>{
    if(props.custom_type==='stat_header') return '5px 5px 0px 0px';
    if(props.custom_type==='stat_card') return '0px 0px 5px 5px';
    if(props.custom_type==='task_card') return '5px';
    return '5px';
}};

width:${props=>{
    if(props.custom_type==='task_card'|| props.custom_type==='stat_header') return'100%';
    return '';
}};

padding:${props=>{
    if(props.custom_type==='task_card') return '8px';
    if(props.custom_type==='stat_card') return '5px';
    return '';
}};

box-shadow:${props=>{
    if(props.custom_type==='task_card') return 'rgba(23, 43, 77, 0.2) 0px 1px 1px, rgba(23, 43, 77, 0.2) 0px 0px 1px';
    if(props.custom_type==='stat_card') return  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    return '';
}};  

transition:${props=>{
    if(props.custom_type==='task_card') 
    return 'background-color 0.3s ease-in-out 0.1s';
    return '';
}};

&:hover{
background-color:${props=>{
    switch (props.custom_type) {
        case 'task_card':
          return '#fcedc5'
        case 'create_card':
            return '#ccc';
        default:
          return '';
    }
}};

border:${props=>{
    if(props.custom_type==='task_card')return '1px solid #fcedc5;';
    return'';
}};

box-shadow:'rgba(252, 237, 197, 0.2) 0px 1px 1px, rgba(252, 237, 197, 0.2) 0px 0px 1px';

cursor:${props=>{
    if(props.custom_type==='task_card' ||
        props.custom_type==='create_wrap'
    )return 'pointer';
    return'';
}};
}



@media (max-width: 768px) {
width:100%;
position:${props=>{
    if(props.custom_type==='stat_header') return 'relative';
    return '';
}};
top:${props=>{
    if(props.custom_type==='stat_header') return'';
    return '';
}};

margin:${props=>{
    if(props.custom_type==='stat_card') return '0px';
    return '';
}};
max-width:${props=>{
    if(props.custom_type==='stat_header') return 'none';
    return '';
}};
}

`

export default Card;