import PropTypes from "prop-types";
// @mui
import { Grid } from "@mui/material";
import ShopProductCard, { ProductProps } from "./ProductCard";

// ----------------------------------------------------------------------

type ProductListProps = {
  products: ProductProps[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
