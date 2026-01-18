import React from "react";
import styles from "./Signup.module.css";
import Container from "../../components/layouts/Container/Container";
import SocialButton from "../../components/Auth/SocialButton";
import Input from "../../components/Auth/Input";
import Checkbox from "../../components/Auth/Checkbox";
import Button from "../../components/ui/Button/Button";
import Image from "../../assets/person_working.jpg";

const Signup = () => {
  return (
    <main className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <img src={Image} alt="student working" />
        </div>

        <div className={styles.right}>
          <Container className={styles.formWrap}>
            <h2 className={styles.heading}>Sign up to KodeSpot Learning</h2>

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
              <Input label="Full name" placeholder="Input name here" />
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

              <Checkbox
                label={
                  'Yes, I understand and agree to the <a href="#">KodeSpot Terms of Service</a> and <a href="#">Privacy Policy</a>.'
                }
              />

              <div className={styles.actions}>
                <Button variant="primary" size="md">
                  Create my account
                </Button>
              </div>

              <div className={styles.login}>
                Already have an account? <a href="#">Log In</a>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Signup;
