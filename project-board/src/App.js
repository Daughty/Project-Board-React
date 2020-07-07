import React from 'react';
import BoardView from './containers/BoardView';
import Label from './components/Text';
import Container from './components/Container';

function App() {
  return (
    <Container custom_type="app_wrap">
        <Container custom_type="heading">
          <Label custom_type="proj_title">Project Board</Label>
        </Container> 
        <BoardView /> 
    </Container>
  );
}

export default App;
