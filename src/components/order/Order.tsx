import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
        textAlign: "center",
      }}
      {...other}
    />
  );
}

type OrderProps = {
  order: {
    date: string;
    product: string;
    quantity: string;
    statuses: {
      date: string;
      status: string;
    }[];
    customer: {
      organisation: string;
      fullName: string;
      cellNumber: string;
      address: string;
    };
  };
};

const StyledOrder = styled(Box)({
  cursor: "pointer",
});

export default function Order(props: OrderProps) {
  const { date, product, quantity } = props.order;
  const dte = new Date(date);

  return (
    <StyledOrder sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          // p: 1,
        }}
      >
        <Box
          sx={{
            bgcolor: "text",
            borderRadius: 3,
            fontSize: "0.875rem",
            fontWeight: "700",
            m: 1,
          }}
        >
          <Item sx={{ px: 1, mt: 1 }}>
            <Typography>
              {dte.toLocaleString("default", { month: "short" }).toUpperCase()}
            </Typography>
          </Item>
          <Item>
            <Typography>
              {dte.toLocaleString("default", { day: "numeric" })}
            </Typography>
          </Item>
          <Item>
            <Typography>
              {dte.toLocaleString("default", { year: "2-digit" })}
            </Typography>
          </Item>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1 0 auto", p: 1 }}>
          <Typography component="div" variant="h5">
            {product}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            quantity {quantity}
          </Typography>
        </Box>
      </Box>
    </StyledOrder>
  );
}
