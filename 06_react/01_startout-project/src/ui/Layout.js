import classes from './Layout.module.scss'
import Header from '../components/Header'

function Layout(props) {
    return <div>
        <Header />
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout