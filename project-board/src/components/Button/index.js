import React from 'react';
import StyledButton from './Button.style';



const Button = (props) => {
    const handleClick = (e) => {
      e.preventDefault();
      console.log("this link was clicked");
      props.onClick();
    }

    return (
    <StyledButton 
     {...props}
     href={props.href}
     button_custom_type={props.buttonType}
     custom_type="button"
     onClick={handleClick}
    >
    <span>{props.label}</span>
    </StyledButton>
    )
}

export default Button;