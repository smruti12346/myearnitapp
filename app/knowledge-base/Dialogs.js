"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Dialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    props.countState > 0 ? setOpen(true) : setOpen(false);
    console.log(props.data);
  }, [props.countState]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Follow these Steps:</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ol
              type="1"
              className="list-group list-group-flush"
            >
              {props?.data?.map((item) => {
                return (
                  <>
                    <li className="list-group-item">{item}</li>
                  </>
                );
              })}
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
