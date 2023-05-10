import { Button } from '@mui/material';
import './Header.scss';

const Header = () => {

  return (<div className='header'>
    <h1 className='header-title'>Build Config</h1>
    <div className='button-container'>
      <Button
        disableFocusRipple={false}
        disableRipple={false}
        disableElevation={false}
        variant="outlined"
        color="secondary"
        className="button secondary-button">
        <span className="btn-cta secondary-btn-cta">Cancel</span>
      </Button>
      <Button
        disableFocusRipple={false}
        disableRipple={false}
        disableElevation={false}
        variant="contained"
        color="primary"
        className="button">
        <span className="btn-cta primary-btn-cta">Save</span>
      </Button>
    </div>

  </div>)
}

export default Header;