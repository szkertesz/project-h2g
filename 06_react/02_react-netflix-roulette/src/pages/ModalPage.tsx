import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../ui/Button'

function ModalPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>modal</Button>
            <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                size={'large'}
                title={'This is Modal Title!'}
            >
                <p>Modal content</p>
                <Button>Button</Button>
            </Modal>
        </>
    );
}

export default ModalPage;
