import { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
import { useUser } from "../../redux/userSlice";
import { signOut } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../common";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    path: PAGES.HOME,
  },
  // {
  //   label: "Profile",
  //   icon: "eva:person-fill",
  //   path: PAGES.PROFILE,
  // },
  // {
  //   label: "Settings",
  //   icon: "eva:settings-2-fill",
  //   path: PAGES.SETTINGS,
  // },
];

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };
  const user = useUser();

  const handleClose = () => {
    setOpen(null);
  };

  function logout() {
    dispatch(signOut());
  }

  function onClick(path: string) {
    navigate(path);
    handleClose();
  }
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          "&:before": {
            zIndex: 1,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            position: "absolute",
          },
        }}
      >
        <Avatar alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user.username}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => onClick(option.path)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
