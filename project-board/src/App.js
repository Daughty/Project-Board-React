import React from 'react';
import BoardView from './containers/BoardView';
import Container from './components/Container';
import NavBar from './containers/NavBar';
import SideBar from './containers/SideBar';
import {Ul,Li} from './components/Text';

const App = () => {
  return (
    <Container custom_type="app_wrap">
        <Container custom_type="heading">
          <NavBar title="CBSE: Grade 5 Maths - Algebra">
            <Ul custom_type="nav_wrap_ul">
              <Li  key="1l"custom_type="nav_wrap_li" active>Task</Li>
              <Li  key="2l"custom_type="nav_wrap_li" >Conversation</Li>
              <Li  key="3l"custom_type="nav_wrap_li">Files</Li>
              <Li  key="4l"custom_type="nav_wrap_li">Resources</Li>
              <Li  key="5l"custom_type="nav_wrap_li">Status</Li>
            </Ul>
          </NavBar>
        </Container>
        <Container custom_type="board_side_wrap">
          <SideBar/>
          <BoardView /> 
        </Container>
        
    </Container>
  );
}

export default App;
