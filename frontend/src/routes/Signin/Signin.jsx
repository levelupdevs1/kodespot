import React from "react";
import styles from "./Signin.module.css";
import Container from "../../components/layouts/Container/Container";
import SocialButton from "../../components/Auth/SocialButton";
import Input from "../../components/Auth/Input";
import Checkbox from "../../components/Auth/Checkbox";
import Button from "../../components/ui/Button/Button";

const Signin = () => {
  return (
    <main className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <img src="/signin-left.jpg" alt="student working" />
        </div>

        <div className={styles.right}>
          <Container className={styles.formWrap}>
            <h2 className={styles.heading}>Sign in to KodeSpot Learning</h2>

            <div className={styles.socials}>
              <SocialButton provider="apple">Continue with Apple</SocialButton>
              <SocialButton provider="google">
                Continue with Google
              </SocialButton>
            </div>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <Input
                label="Email address"
                type="email"
                placeholder="Input address here"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password (minimum of 8 characters)"
              />

              <div className={styles.row}>
                <Checkbox label={"Keep me logged in"} />
                <a className={styles.forgot} href="#">
                  Forgot password?
                </a>
              </div>

              <div className={styles.actions}>
                <Button variant="primary" size="md">
                  Sign in
                </Button>
              </div>

              <div className={styles.login}>
                New to KodeSpot? <a href="/signup">Sign Up</a>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Signin;
