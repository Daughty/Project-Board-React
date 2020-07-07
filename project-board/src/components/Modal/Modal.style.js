import styled from  'styled-components';

export const StyledModal = styled.div`
position: fixed;
display:flex;
justify-content:space-between;
z-index: 500;
background-color: white;
width: 50%;
border: 1px solid #ccc;
border-radius:5px;
padding: 16px;
left: 15%;
top: 30%;
box-sizing: border-box;
transition: all 0.3s ease-out;


@media (max-width: 768px) {
width: 95%;
left:5px;
        
}
`
export const Overlay = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.4);
transition: opacity 500ms;
visibility: ${props => (props.show_modal ? 'visible' : 'hidden')};
opacity: ${props => (props.show_modal ? '1' : '0')};
z-index: 100;
`

