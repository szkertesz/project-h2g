import { RefObject, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Portal from './Portal';
import classes from './Modal.module.scss';
import closeIcon from '../assets/images/icon-close.svg'

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    size?: 'small' | 'medium' | 'large';
    handleClose: () => void;
    title?: string;
}

const Modal: React.FC<Props> = ({ children, isOpen, size = 'medium', handleClose, title = '' }) => {
    const modalRef = useRef(null);
    const modalDialogRef = useRef<HTMLDivElement>(null!);
    const modalSize = size === 'small' ? classes['modal--small'] :
                      size === 'medium' ? classes['modal--medium'] :
                      classes['modal--large']

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
                    exit: classes['modal-exit'],
                }}
                nodeRef={modalRef}
                onEntered={() => disableBodyScroll(modalDialogRef.current)}
                onExited={() => enableBodyScroll(modalDialogRef.current)}
            >
                <div
                    onClick={handleClose}
                    ref={modalRef}
                    className={`${classes.modal} ${modalSize}`}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        ref={modalDialogRef}
                        className={classes['modal__dialog']}
                    >
                        <button
                            onClick={handleClose}
                            className={classes['modal__close']}
                        >
                            <img src={closeIcon} alt='' />
                        </button>
                        <div className={classes['modal__content']}>
                            {title.length > 0 &&
                                <h2 className={classes['modal__title']}>{title}</h2>
                            }
                            {children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </Portal>
    );
};

export default Modal;
