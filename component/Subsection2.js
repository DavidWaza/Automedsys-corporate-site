import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Subsection2.module.css";
import Image from "next/image";
import Oval from "../images/Oval.png";
import Ellipse from "../images/ellipse.png";
import EllipseTwo from "../images/ellipseTwo.png";
import EllipseThree from "../images/ellipseThree.png";
import Phone from "../images/phone.png";
import Checked from "../images/checked.png";

const Subsection2 = () => {
  return (
    <div className={styles.body}>
      <Container>
        <Row>
          <Col sm={6}>
            <div className={styles.ovalImg}>
              <Image src={Oval} alt="Picture of the author" />
            </div>
            <div className={styles.ovalImgTwo}>
              <Image src={Oval} alt="Picture of the author" />
            </div>
            <div className={styles.ellipse}>
              <Image src={Ellipse} alt="Picture of the author" />
            </div>
            <div className={styles.ellipseTwo}>
              <Image src={EllipseTwo} alt="Picture of the author" />
            </div>
            <div className={styles.ellipseThree}>
              <Image src={EllipseThree} alt="Picture of the author" />
            </div>
            <div className={styles.phone}>
              <Image src={Phone} alt="Picture of the author" />
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.headerText}>
              <h2>Transform your practice</h2>
              <p className={styles.text}>
                Start using a powerful ecosystem of modular solutions configured
                to your practice. Transform your practice with unrivaled
                solutions to deliver tremendous value to you and your patients.
              </p>
            </div>
            <div className={styles.display}>
              <Col sm={6}>
                <div className={styles.display}>
                  <Image src={Checked} alt="checked" width={30} height={30} />
                  <p className={styles.checkedText}>Comprehensive</p>
                </div>
              </Col>
            </div>
            <Col sm={6}>hey</Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subsection2;
