import { createTheme, PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { STR_THEME_MODE } from "../common";
import type { RootState } from "./store";

// Define a type for the slice state
interface ThemeState {
  mode: PaletteMode | undefined;
}

// Define the initial state using that type
const initialState: ThemeState = {
  mode:
    (localStorage.getItem(STR_THEME_MODE) === "dark" ? "dark" : "light") ||
    undefined,
};

export const ThemeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem(STR_THEME_MODE, state.mode);
    },
  },
});

export const { toggleThemeMode } = ThemeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.theme;

export default ThemeSlice.reducer;

export const theme = (mode: PaletteMode | undefined) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "rgba(0, 125, 112, 1)",
      },
      secondary: {
        main: "rgba(11, 143, 225, 1)",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
      // fontSize: 13,
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          dense: {
            height: 50,
            minHeight: 50,
          },
        },
      },
    },
  });
