import { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import classes from './LoginPage.module.scss'

function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onPasswordChanged = (e: {target: {value: string}}) => {
        setPassword(e.target.value)
    }
    const handleReset = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!email) {
            setEmailError('Please give us an email address!')
        } else if (!pattern.test(email)) {
            setEmailError('Give us a valid email address please!')
        } else {
            setEmailError('')
        }
        if (!password) {
            setPasswordError('Try to fill the password field please!')
        } else if (password !== process.env.REACT_APP_PASSWORD) {
            setPasswordError('Incorrect password! Hint: check the project\'s .env file')
        } else {
            setPasswordError('')
        }
        if (!emailError && !passwordError) {
            navigate('/movies', { replace: true });
        }
    }
    return (
        <div className={classes.login}>
            <section className={classes['login__content']}>
                <h1 className={classes['login__title']}>
                    Login page
                </h1>
                <form
                    action=''
                    onSubmit={handleSubmit}
                    className={classes['login__form']}
                    noValidate
                >
                    <div className={classes['login__group']}>
                        <label htmlFor='userId'>user ID*</label>
                        <input
                            type='email'
                            id='userId'
                            onChange={onEmailChanged}
                            required
                        />
                        {emailError && (
                            <p className={classes['login__error']}>
                                {emailError}
                            </p>
                        )}
                    </div>
                    <div className={classes['login__group']}>
                        <label htmlFor='password'>Password*</label>
                        <input
                            type='password'
                            id='password'
                            onChange={onPasswordChanged}
                            required
                        />
                        {passwordError && (
                            <p className={classes['login__error']}>
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <div className={classes['login__action']}>
                        <Button isGhost={true} onClick={handleReset}>
                            reset
                        </Button>
                        <Button type='submit'>Log in</Button>
                    </div>
                    <p>*Mandatory</p>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;
