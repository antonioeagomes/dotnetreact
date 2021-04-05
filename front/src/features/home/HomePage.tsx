import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore();
  const { isLoggedIn, user } = userStore;
  const { openModal } = modalStore;
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Activities
        </Header>

        {isLoggedIn && user && user.token ? (
          <>
            <Header as="h2" inverted content={`Welcome back `} />
            <Button as={Link} to="/activities" size="huge" inverted>
              Go to activities!
            </Button>
          </>
        ) : (
          <>
            <Header as="h2" inverted content={`Welcome `} />
            <Button
              onClick={() => openModal(<LoginForm />)}
              size="huge"
              inverted
            >
              Login
            </Button>
            <Button onClick={() => openModal(<RegisterForm />)} size='huge' inverted>
            Register
          </Button>
          </>
        )}
      </Container>
    </Segment>
  );
});
