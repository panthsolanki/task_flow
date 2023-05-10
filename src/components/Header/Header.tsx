import { Button } from '@mui/material';
import './Header.scss';

const Header = () => {

  return (<div className='header'>
    <h1 className='header-title'>Header</h1>
    <div className='button-container'>
      <Button variant="contained" color="primary" className="button">
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className="button">
        secondary
      </Button>
    </div>

  </div>)
}

export default Header;