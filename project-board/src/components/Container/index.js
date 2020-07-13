import styled from 'styled-components';

const Container = styled.div`
font-size:18px;
display:flex;
box-sizing: border-box;
position:${props=>{
    if(props.custom_type==='drop_wrap') return 'relative';
    return '';
}};

color:${props=>props.custom_type==='drop_wrap'?'#BEBEBE':'black'};


flex-direction:${props=>{
    if(props.custom_type==='task_col'||
    props.custom_type==='app_wrap'||
    props.custom_type==='stat_wrap'||
    props.custom_type==='col'||
    props.custom_type==='mo_col_wrap'||
    props.custom_type==='nav_links_one'||
    props.custom_type==='app_title'||props.custom_type==='board_nav_wrap'
    ) return 'column';
    if(props.custom_type==='modal_wrap') return 'row';
    return 'row';
}};
justify-content:${props=>{
    if(props.custom_type==='heading'||props.custom_type==='create_wrap'||
    props.custom_type==='stat-header' || 
    props.custom_type==='progress_bar' || 
    props.custom_type==='task_name_wrap'
    ) return 'flex-start';
    if(props.custom_type==='app_wrap'||
    props.custom_type==='board_side_wrap'||
    props.custom_type==='nav_wrap' ||  props.custom_type==='nav_wrap_ver_two') return 'flex-start';
    if(props.custom_type==='task_heading') return 'space-between';
    if(props.custom_type==='avatar_wrap') return 'flex-end';

    return 'center';
}};

align-items:${props=>{
    if(props.custom_type==='board_wrap' || 
    props.custom_type==='task_heading'||
    props.custom_type==='app_wrap'||
    props.custom_type==='mo_col_wrap'||props.custom_type==='board_side_wrap'||
    props.custom_type==='side_wrap'||props.custom_type==='app_title'||
     props.custom_type==='board_nav_wrap'
    ) return 'flex-start';
    return 'center';
}};

align-self:${props=>{
    if(props.custom_type==='stat_wrap') return 'stretch';
    return '';
}};

margin:${props=>{
    if(props.custom_type==='create_wrap') return '0px 0px 10px 18px';
    if(props.custom_type==='stat_wrap') return '0px 10px 10px 0px';
    if(props.custom_type==='progress_bar') return '10px 2px 5px';
    if(props.custom_type==='avatar_wrap') return '10px';
    if(props.custom_type==='due_wrap') return '5px 10px';
    return '';
}};

width:${props=>{
    if(props.custom_type==='progress_bar'||
       props.full_width || props.custom_type==='board_side_wrap' ||
       props.custom_type==='heading'
    ) return '100%';
    if(props.custom_type==='task_name_wrap') return '230px';
    if(props.custom_type==='img_wrap') return '40px';
    if(props.custom_type==='side_wrap') return '5%';
    if(props.custom_type==='board_nav_wrap') return '95%';
    if(props.custom_type==='board_wrap'||props.custom_type==='nav_wrap_ver_two') return '100%';
    return '';
}};

height:${props=>{
    if(props.custom_type==='progress_bar') return '10px';
    if(props.custom_type==='app_wrap'||props.custom_type==='side_wrap') return '100vh';
    if(props.custom_type==='img_wrap') return '40px';
    return '';
}};

background-color:${props=>{
    if(props.custom_type==='progress_bar' || props.custom_type=='due_wrap') return '#f4f5f7';
    if(props.custom_type==='side_wrap') return '#813186';
    return'';
}};
background-image:${props=>{
    if(props.custom_type === 'app_wrap') return '#fff';
    return '';
}};

border-radius:${props=>{
    if(props.custom_type==='progress_bar'||
    props.custom_type=='due_wrap'||
    props.custom_type==='img_wrap'
    ) return '5px';
    return '';
}};

padding:${props=>{
    if(props.custom_type==='nav_wrap') return '10px 20px 0px 20px';
    if(props.custom_type==='board_wrap') return '30px 0px';
    if(props.custom_type==='app_title') return '0px 40px';
    if(props.custom_type==='due_wrap') return '5px';
    return '';
}};

border-bottom:${props=>{
    if(props.custom_type==='heading'||props.custom_type==='nav_wrap_ver_two') return '1px solid #ccc';
    return '';
}};

&:hover{
cursor:${props=>{
    if(props.custom_type==='drop_wrap'||props.custom_type==='img_wrap') return 'pointer';
    return '';
}};        
}

span {
    width:${props=>{
        if(props.custom_type==='progress_bar') return props.width;
        return '';
    }};
    height:${props=>{
        if(props.custom_type==='progress_bar') return '100%';
        return '';
    }};
    background-color:${props=>{
        if(props.custom_type==='progress_bar' && Number(props.val) >= 70) return '#00CC3D';
        if(props.custom_type==='progress_bar' && Number(props.val) >= 45) return '#FEC903';
        if(props.custom_type==='progress_bar') return '#FE8E22';
        return'';
    }};
    border-radius:${props=>{
        if(props.custom_type==='progress_bar') return '5px';
        return '';
    }};
    color:#fff;
    font-size:8px;
}

i {
    font-size:${props=>{
        if(props.custom_type==='avatar_wrap' && props.flag===true) return '12px';
        return '15px';
    }};
    color:${props=>{
        if(props.custom_type==='avatar_wrap' && props.flag===true) return '#ff5630';
        if(props.custom_type==='drop_wrap') return '#ccc';
        if(props.custom_type==='due_wrap') return '#505050';
        return '#000';
    }};
    margin:${props=>{
        if(props.custom_type==='avatar_wrap'  && props.flag===true) return '2px 0px 5px 10px';
        if(props.custom_type==='due_wrap') return '5px';
        return '0px';
    }};
    opacity:${props=>{
        if(props.custom_type==='avatar_wrap'  && props.flag===false) return '0';
        return '1';
    }};
    visibility:${props=>{
        if(props.custom_type==='avatar_wrap'  && props.flag===false) return 'hidden';
        return 'visible';
    }};

}
img {
    border-radius:${props=>{
        if(props.custom_type==='img_wrap') return '5px';
        return '';
    }};
    width:${props=>{
        if(props.custom_type==='img_wrap') return '40px';
        return '';
    }}; 
    height:${props=>{
        if(props.custom_type==='img_wrap') return '40px';
        return '';
    }};
}



@media (max-width: 768px) {
width:100%;
flex-direction:${props=>{
    if(props.custom_type==='board_wrap'||
    props.custom_type==='app_wrap'||
    props.custom_type==='stat_wrap'||
    props.custom_type==='mo_col_wrap'|| props.custom_type==='nav_wrap'
    ) return 'column';
    if(props.custom_type==='task_col') return 'column';
    return 'row';
}};
padding:${props=>{
    if(props.custom_type==='app_wrap') return '10px';
    if(props.custom_type==='app_title') return '10px';
    return '';
}};
margin:${props=>{
    if(props.custom_type==='avatar_wrap') return '2px';
    return '';
}};
height:${props=>props.custom_type==='app_wrap'?'100%':''};
display:${props=>{
    if(props.custom_type==='side_wrap' || 
    props.custom_type==='nav_links_one'||
    props.custom_type==='nav_wrap_ver_two'
    ) return 'none';
    return '';
}};

}
@media (min-width:768px) and (max-width:1024px){
    width:${props=>props.custom_type==='board_wrap'?'100%':''};
    justify-content:${props=>props.custom_type==='board_wrap'?'flex-start':''};
    height:${props=>props.custom_type==='app_wrap'?'100%':''};
    overflow-x:${props=>props.custom_type==='board_wrap'?'auto':''};
    
}
`

export default Container