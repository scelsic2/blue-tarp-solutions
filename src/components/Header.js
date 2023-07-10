import logo from '../assets/logo.png'

function Header(props) {


    return (
        <header className="header">
          <a href='/'>
            <img src={logo} alt='Blue Tarp Solutions Logo' className='logo'/>
          </a>
          <nav className='header-nav'>
            <a href='#'>
              <p>Nav 1</p>
            </a>
            <a href='#'>
              <p>Nav 2</p>
            </a>
            <a href='#'>
              <p>Nav 3</p>
            </a>
          </nav>
        </header>
    )

};

export default Header;