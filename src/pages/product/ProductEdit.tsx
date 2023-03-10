import { gql } from "../../__generated__";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "../../components/other/Loading";
import {
  GetProductsSchema,
} from "../../__generated__/graphql";
import { ProductEditForm } from "./ProductEditForm";

export const GET_FLAGS_PRODUCTS_TYPE = gql(`
query GetFlagsByType($input: Float!) {
    getFlagsByType(input: $input) {
      description
      _id
    }
  }
`);
const GetProduct = gql(`
query GetProduct($input: String!) {
  getProduct(input: $input) {
    _id
    quantity
    type
    name
    unitPrice
  }
}
`);

export default function ProductEdit() {
  const { productId } = useParams();

  const getProductQuery = useQuery(GetProduct, {
    variables: { input: productId || "" },
  });

  if (getProductQuery?.loading) return <Loading></Loading>;

  return (
    <>
      <ProductEditForm
        data={getProductQuery.data?.getProduct as GetProductsSchema}
      />
    </>
  );
}


