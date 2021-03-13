import {Component} from 'react' 
import {Link} from 'react-router-dom'
import menuData from './menuData.json'
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: menuData
    }
  }
  render() {
    return (
      <header>
        <section class="Header">
          <h1><Link to="/">Movies App</Link></h1>
          {/* <nav>
            <ul>
              {this.state.menuItems.map((item, idx)=> {
                return (
                  <li key={idx}>
                    <Link to={item.path}>{item.pageName}</Link>
                  </li>
                )
              })}
            </ul>

          </nav> */}
        </section>
      </header>
    )
  }
}


export default Header