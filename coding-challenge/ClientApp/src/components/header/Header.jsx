import logo from '../../assets/images/logo.png'
import './Header.css'

const Header = ({ selectedProductHandler }) => {
  return <header className="header">
    <div className="header_logo">
      <img src={logo}/>
    </div>
  </header>
}

export default Header ;
