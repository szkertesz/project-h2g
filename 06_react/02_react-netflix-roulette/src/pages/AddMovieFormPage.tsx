import { useEffect, useState } from 'react';
import AddMovieForm from '../components/AddMovieForm';
import Modal from '../components/Modal';

function AddMovieFormPage() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>{
        setIsOpen(true)
    }, [])

    return (
        <>
            <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                size={'large'}
            >
                <AddMovieForm />
            </Modal>
        </>
    );
}
 export default AddMovieFormPage