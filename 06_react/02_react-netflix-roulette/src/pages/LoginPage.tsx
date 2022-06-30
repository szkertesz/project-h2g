import Button from "../ui/Button";
import classes from './LoginPage.module.scss'

function LoginPage() {
    return (
        <div className={classes.login}>
            <section className={classes['login__content']}>
                <h1 className={classes['login__title']}>Login page</h1>
                <form action='' className={classes['login__form']}>
                    <div className={classes['login__group']}>
                        <label htmlFor='userId'>user ID*</label>
                        <input type='email' id='userId' />
                    </div>
                    <div className={classes['login__group']}>
                        <label htmlFor='password'>Password*</label>
                        <input type='password' id='password' />
                    </div>
                    <div className={classes['login__action']}>
                        <Button isGhost={true}>reset</Button>
                        <Button>Log in</Button>
                    </div>
                    <p>*Mandatory</p>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;
