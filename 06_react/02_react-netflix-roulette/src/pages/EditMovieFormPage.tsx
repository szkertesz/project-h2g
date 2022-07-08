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
                <EditMovieForm movieId={'8a3ec45b-b0a4-4ebd-a56e-ef618f40dffc'} />
            </Modal>
        </>
    );
}
 export default AddMovieFormPage