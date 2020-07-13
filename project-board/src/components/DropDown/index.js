import React from "react";
import Container from '../Container';
import { DropDownContainer , DropDownList , ListItem } from './Drop.style'
import {Label} from './../Text';


const DropDown = props => {
        return (
           <DropDownContainer id={props.key}>
            {props.isOpen && (
                <Container>
                <DropDownList>
                    <Label custom_type="drop_head">Actions</Label>
                    {props.options.map((entry)=>{
                    return (<ListItem key={entry.id} onClick={()=>props.handleSelect(entry.id)}>{entry.name}</ListItem>)
                    })}
                </DropDownList>
                </Container>
            )}
           </DropDownContainer> 
        )
    }

export default DropDown;
