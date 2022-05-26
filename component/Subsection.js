import styles from "../styles/Subsection.module.css";

const Subsection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h3>Be Empowered</h3>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          We develop state of art technology to drive workflow optimization,
          analytics, information security, and enhanced user experience. Our
          innovation is driven by a multidisciplinary team with expertise in
          medicine, information technology, and engineering. We develop
          patient-centered care and clinician-centric solutions to ensure
          patients and healthcare providers thrive. Our goal is to enhance
          healthcare delivery and achievement of the quadruple aim in healthcare
          which is better outcomes, lower costs, improved patient experience,
          and improved clinician experience.
        </p>
      </div>
    </div>
  );
};

export default Subsection;
