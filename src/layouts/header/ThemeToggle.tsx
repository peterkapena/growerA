import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { toggleThemeMode } from "../../redux/themeSlice";
import { useAppDispatch } from "../../redux/hooks";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      onClick={() => dispatch(toggleThemeMode())}
      sx={{
        padding: 0,
        width: 44,
        height: 44,
      }}
    >
      <DarkModeIcon />
    </IconButton>
  );
}
