import Iframe from 'react-iframe'
import React from "react"


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Estimate() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button   variant="contained"color="primary" type="button" onClick={handleOpen}>
        Free Estimate
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Free Estimate</h2>

            <Iframe
              width="1080px"
              height="950rem"
              display="initial"
              position="relative"
              src='https://forms.zohopublic.com/highviewconstruction/form/ContactForm/formperma/uDcbOwG1jziah7w4RknQcRGodfTHHL3Hl7NGGH1_SsE'
            >
            </Iframe>
            <Estimate />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Estimate;