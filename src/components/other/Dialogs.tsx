import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type AlertDialogProps = {
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  message: string;
};

export function AlertDialog(props: AlertDialogProps) {
  const { onClose, onConfirm, title, message } = props;

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        disableEscapeKeyDown={true}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title || "Please note"}</DialogTitle>
        <DialogContent sx={{ minWidth: "400px" }}>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          {onConfirm && <Button onClick={onConfirm}>Yes</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
