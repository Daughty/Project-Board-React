import React,{Component} from 'react';

//Components import
import Container from './../../components/Container';
import {Label,Ul,Li} from './../../components/Text';
import logo from './../../assets/img/B_tag.png';


const NavBar = (props) => {
        return (
                <Container custom_type="nav_wrap">
                    <Container custom_type="img_wrap">
                    <img src={logo} alt="logo"/>
                    </Container>
                    <Container custom_type="app_title">
                        <Label custom_type="proj_title">{props.title}</Label>
                        <Container custom_type="nav_links_one">
                          {props.children}
                        </Container>
                    </Container>
                </Container>
        )  
}


export default NavBar;