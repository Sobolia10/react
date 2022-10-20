import logo from "../../logo.svg";
import './style.css'

const Header = () => {
    return (
        <div className={'border-table'}>
            <img width={'150px'} src={logo} alt="company logo"/>
            <div className={'navigation'}>
                Navigation
            </div>
        </div>
    );
}

export default Header;