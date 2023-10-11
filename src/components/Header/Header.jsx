import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandom } from '../../utils/api';
import './Header.css';

export default function Header (props) {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    getRandom(setRandom)
  }, [])

  function handleClick() {
    getRandom(setRandom)
  }

  return (
    <header>
      <div className='header-elements'>
        <div>
          <Link to='/'>
            <img className='svg logo-svg' src="/search.svg" />
          </Link>
          <Link to='/category'>
            <img className='svg logo-svg' src="/category.svg" />
          </Link>
          <Link to='/area'>
            <img className='svg logo-svg' src="/area.svg" />
          </Link>
          <Link to='/random' state={{...random}} onClick={handleClick}>
            <img className='svg logo-svg' src="/random.svg" />
          </Link>
        </div>
        <Link to='/'>
          <h1 className='title'>Recipe</h1>
        </Link>
        <Link to='/favorites'>
          <img className='svg heart-svg' src="/filled-heart.svg" />
        </Link>
      </div>
    </header>
  );
}