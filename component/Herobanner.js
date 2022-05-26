import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Herobanner.module.css';

const Herobanner = () => {
  return (
    <div className={styles.body}>
        <Container>
            <Row>
                <Col>
                    <div className={styles.bannerText}>
                        <p>Transform your practice</p>
                        <h1>Telehealth solution</h1>
                        <h1>at no cost.</h1>
                        <Link href='/getStarted' className={styles.link}>Get Started for free</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Herobanner