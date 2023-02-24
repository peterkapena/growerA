import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { IS_DEVELOPER, PAGES, STR_TOKEN } from "../../common";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/userSlice";
import DashboardLayout from "./DashboardLayout";

const VERIFY_TOKEN = gql(`
mutation VerifyToken($input: String!) {
  verifyToken(input: $input) {
    username
    token
    email
    surName
    givenName
    isValid
    organisationId
  }
}`);

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const token = sessionStorage.getItem(STR_TOKEN);

  const [verifyToken] = useMutation(VERIFY_TOKEN, {
    variables: { input: token || "" },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyTokenAsync = async () => {
      try {
        const rtn = await verifyToken({ variables: { input: token || "" } });
        if (IS_DEVELOPER) console.log(rtn.data);
        if (rtn.data) {
          const { isValid } = rtn.data?.verifyToken;
          if (isValid) {
            const {
              email,
              givenName,
              surName,
              token,
              username,
              organisationId,
            } = rtn.data?.verifyToken;

            sessionStorage.setItem(STR_TOKEN, token);
            dispatch(
              setUser({
                user: {
                  email,
                  givenName,
                  surName,
                  username,
                  organisationId,
                },
              })
            );
            setLoaded(true);
          } else {
            sessionStorage.removeItem(STR_TOKEN);
            window.location.href = PAGES.SIGNIN;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyTokenAsync();
  }, []);

  if (loaded) return <DashboardLayout />;
  else
    return (
      <>
        <p>Loading...</p>
      </>
    );
}
