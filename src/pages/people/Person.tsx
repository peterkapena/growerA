import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { GetPersonQuery } from "../../__generated__/graphql";
import Loading from "../../components/other/Loading";
import { EditOutlined, HouseOutlined } from "@mui/icons-material";
import { PAGES } from "../../common";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GetPerson = gql(`
query GetPerson($input: String!) {
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
  }
}
`);

export default function Person() {
  const { personId } = useParams();
  const { data, loading } = useQuery<GetPersonQuery>(GetPerson, {
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
                justifyContent: "space-between",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Typography variant="subtitle1">{getPerson.givenName}</Typography>
              <Button
                endIcon={<EditOutlined />}
                variant="outlined"
                onClick={() => navigate(PAGES.PERSONEDIT + "/" + personId)}
              >
                Edit
              </Button>
            </Box>
          }
          subheader={
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Chip
                label={getPerson.organisation}
                clickable
                icon={<HouseOutlined />}
                deleteIcon={<EditOutlined />}
              ></Chip>
              {/* <Button
                endIcon={<EditOutlined />}
                variant="text"
                onClick={() => navigate(PAGES.PERSONEDIT + "/" + personId)}
              >
                Edit
              </Button> */}
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
                <Typography variant="h6">Basic details</Typography>
                <List component="nav">
                  <BasicDetailsItem
                    title="Surname"
                    data={getPerson.surName}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Gender"
                    data={getPerson.gender}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Marital status"
                    data={getPerson.maritalStatus}
                  ></BasicDetailsItem>
                </List>
              </Item>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Grid paddingX={1} paddingBottom={1}>
                <Item>
                  <Typography variant="h6">Contact details</Typography>
                  <BasicDetailsItem
                    title="Email"
                    data={getPerson.email}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Tel. Number"
                    data={getPerson.cellNumber1}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Alternative Tel. Number"
                    data={getPerson.cellNumber2}
                  ></BasicDetailsItem>
                </Item>
              </Grid>
              <Grid padding={1}>
                <Item>
                  <Typography variant="h6">Address details</Typography>
                  <BasicDetailsItem
                    title="Plot"
                    data={getPerson.line1}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Village"
                    data={getPerson.line2}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Parish/Ward"
                    data={getPerson.line3}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="Subcountry"
                    data={getPerson.line4}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="County/Municipality"
                    data={getPerson.line5}
                  ></BasicDetailsItem>
                  <Divider />
                  <BasicDetailsItem
                    title="District"
                    data={getPerson.line6}
                  ></BasicDetailsItem>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
type BasicDetailsItemsProps = {
  title: string;
  data: string;
};
function BasicDetailsItem({ title, data }: BasicDetailsItemsProps) {
  return (
    <ListItemText>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{data}</Typography>
    </ListItemText>
  );
}
