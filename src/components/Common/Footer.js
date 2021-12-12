import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MatDialog from '../Common/MatDialog';
function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <box
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
    >
      <MatDialog open={open} handleClose={handleClose} />
      <IconButton color="error">
        <AddIcon fontSize="large" onClick={handleClickOpen} />
      </IconButton>
    </box>
  );
}

export default Footer;
