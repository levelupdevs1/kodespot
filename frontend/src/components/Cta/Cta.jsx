import Container from "../layouts/Container/Container";
import Button from "../ui/Button/Button";
import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <Container>
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h2>Teach the world online</h2>
          <p>
            Create an online video course, reach students across the globe, and
            earn money
          </p>
        </div>
        <Button variant="secondary" size="md">
          Teach on KodeSpot
        </Button>
      </div>
    </Container>
  );
};

export default Cta;
