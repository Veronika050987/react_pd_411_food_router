import './Header.css';
import { Link } from 'react-router-dom';

function Header()
{
    return(
        <div className='header'>
            <div className='wrap'>
                <div className='logo'><Link to="/">🥣Food🍳</Link></div>
                <div className='right'>
                    <ul>
                        <li>
                            <Link to="/about">
                              <span className='icon'>🛈</span>
                              <span className='text'>About</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                               <span className='icon'>✆</span>
                               <span className='text'>Contacts</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default Header;