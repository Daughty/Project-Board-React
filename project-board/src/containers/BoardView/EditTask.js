import React , { Component } from 'react';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Button from '../../components/Button';



class EditTask extends Component{
    state={}

    render(){
        return(
            <Modal showModal={this.props.showModal} handleClose={this.props.hideModal}>
             <Container custom_type="mo_col_wrap">
                <Container custom_type="modal_wrap">
                    <Input custom_type="editName" 
                    full_width placeholder="Task name" 
                    val={this.props.taskName}
                    hidden={true}
                    /> 
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                     placeholder="Enter Due Date" 
                    type="date"
                    label="Due:"
                    />
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                    placeholder="Enter Progress(%)" 
                    type="text"
                    label="Progress:"
                    />
                </Container>
                <Container custom_type="extra_wrap">
                    <Input custom_type="dueDate" 
                    placeholder="Assigned To" 
                    type="text"
                    label="Assignee:"
                    />
                </Container>
                <Button label="save"/>
             </Container>

            </Modal>
        )
    }
}


export default EditTask;