import * as React from 'react'
import {useState} from 'react'
import {Button, Card, CardBody, Modal, ModalBody, Input} from 'reactstrap'


export function ReactstrapComponent({propsText, propsText2}){

    const [modalState, setModalState] = useState(false);
    const [textState, setTextState] = useState("Domyślny")
    const [objectState, setObjectState] = useState({name: "Tomasz"});

    function LetTest(){
        
        for(var i = 0; i < 15; i++){
            let out = i;
            console.log(out);
        }

        for(var i = 0; i < 15; i++){
            let out;
            console.log(out);
        }
        
    }
    
    return <>
        <Card>
            <CardBody>
                <Button onClick={() => setModalState({modalState: !modalState})}>Kliknij mnie!</Button>
                <Input onKeyUp={(e) => {setTextState(e.target.value); setObjectState({name: e.target.value})}}></Input>
                {propsText}
                <br>
                </br>
                <Button onClick={() => propsText2()}>Alert!</Button>
                {LetTest()}
            </CardBody>
        </Card>
        <Modal isOpen={modalState} toggle={() => setModalState(false)}>
            <ModalBody>
                {textState}
                <br></br>
                {objectState.name}
            </ModalBody>
        </Modal>
    </>
}
