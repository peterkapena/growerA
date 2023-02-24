import { Box } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import { APP_NAME, PAGES } from "../../common";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(PAGES.HOME)}
      component="a"
      sx={{
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <ForestIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      {APP_NAME}
    </Box>
  );
}
