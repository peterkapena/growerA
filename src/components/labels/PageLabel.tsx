import { Typography } from "@mui/material";

interface LabelProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  children?: React.ReactNode;
}

const PageLabel: React.FC<LabelProps> = ({ variant, children }) => (
  <Typography mb={2} variant={variant || "h5"}>{children}</Typography>
);

export default PageLabel;
