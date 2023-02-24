import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { GetPersonSchema } from "../../__generated__/graphql";
import Loading from "../../components/other/Loading";
import { EditOutlined } from "@mui/icons-material";
import { PAGES } from "../../common";
import BasicDetails from "../../components/personedit/BasicDetails";
import ContactDetails from "../../components/personedit/ContactDetails";
import AddressDetails from "../../components/personedit/AddressDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GetPersonEdit = gql(`
query GetPersonEdit($input: String!) {
    getPerson(input: $input) {
      _id
      surName
      givenName
      gender
      maritalStatus
      organisation
      email
      cellNumber1
      cellNumber2
      line1
      line2
      line3
      line4
      line5
      line6
      organisationId
      contactId
      addressId
      flgGender
      flgMaritalStatus
    }
  }
  `);

export default function PersonEdit() {
  const { personId } = useParams();
  const { data, loading } = useQuery(GetPersonEdit, {
    variables: { input: personId },
  });
  const navigate = useNavigate();

  if (!data || loading) return <Loading></Loading>;

  const { getPerson } = data;

  return (
    <>
      <Card>
        <CardHeader
          title={
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Button
                startIcon={<EditOutlined />}
                variant="text"
                onClick={() => navigate(PAGES.PERSONEDIT + "/" + personId)}
              >
                Editing {getPerson.givenName}
              </Button>
            </Box>
          }
        ></CardHeader>
        <CardContent>
          <Grid
            container
            direction={{ xs: "column", md: "row", lg: "row" }}
            spacing={{ xs: 2, md: 2 }}
          >
            <Grid item xs={6} sm={6} md={6}>
              <Item>
                <BasicDetails
                  data={getPerson as GetPersonSchema}
                ></BasicDetails>
              </Item>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Grid paddingX={1} paddingBottom={1}>
                <Item>
                  <ContactDetails
                    data={getPerson as GetPersonSchema}
                  ></ContactDetails>
                </Item>
              </Grid>
              <Grid padding={1}>
                <Item>
                  <AddressDetails
                    data={getPerson as GetPersonSchema}
                  ></AddressDetails>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
