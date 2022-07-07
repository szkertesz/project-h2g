import { useEffect, useState } from 'react';
import EditMovieForm from '../components/EditMovieForm';
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
                <EditMovieForm />
            </Modal>
        </>
    );
}
 export default AddMovieFormPage