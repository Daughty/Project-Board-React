import React,{Component} from 'react';

//Components import 
import Container from './../../components/Container';
import home from './../../assets/img/home.png';
import edit from './../../assets/img/edit.png';
import search from './../../assets/img/search.png';
import dashboard from './../../assets/img/dashboard.png';
import graph from './../../assets/img/graph.png';
import misc1 from './../../assets/img/misc1.png';
import {Ul,Li} from './../../components/Text';

class SideBar extends Component {
   state = {
      isActive:true,
   }

    render(){
        return (
            <Container custom_type="side_wrap">
                <Ul custom_type="side_wrap_ul">
                    <Li custom_type="side_wrap_li"><img src={home} alt=""/></Li>
                    <Li custom_type="side_wrap_li"><img src={search} alt=""/></Li>
                    <Li custom_type="side_wrap_li" active><img src={edit} alt=""/></Li>
                    <Li custom_type="side_wrap_li"><img src={dashboard} alt=""/></Li>
                    <Li custom_type="side_wrap_li"><img src={misc1} alt=""/></Li>
                    <Li custom_type="side_wrap_li"><img src={graph} alt=""/></Li>
                </Ul>
            </Container>   
        );
    }
};


export default SideBar;
