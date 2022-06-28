import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import classes from './Modal.module.scss';

interface Props {
    children: JSX.Element;
    isOpen: boolean;
    handleClose: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, handleClose }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
    });
    // if (!isOpen) return null;

    return (
        <Portal containerId='portal-container'>
            <CSSTransition
                in={isOpen}
                timeout={{ entry: 0, exit: 300 }}
                unmountOnExit
                classNames={{
                    enterDone: classes['modal-enter-done'],
                    exit: classes['modal-exit']
                }}
                nodeRef={nodeRef}
            >
                <div onClick={handleClose} ref={nodeRef} className={classes.modal}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={classes['modal__dialog']}
                    >
                        <button
                            onClick={handleClose}
                            className={classes['modal__close']}
                        >
                            Close
                        </button>
                        <div className={classes['modal__content']}>
                            {children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </Portal>
    );
};

export default Modal;
