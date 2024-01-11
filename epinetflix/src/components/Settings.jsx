import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const Settings = () => {
  return (
    <main className="bg-light pt-4">
      <Container fluid id="first" className="bg-light" style={{ width: '80%' }}>
        <Row>
          <Col xs={12} lg={4}>
            <h1>Account</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={4}>
            <h6 className="text-black-50">MEMBERSHIP & BILLING</h6>
            <Button type="button" className="btn btn-light shadow">
              Cancel Membership
            </Button>
          </Col>
          <Col xs={12} lg={8}>
            <Row className="d-flex">
              <Col>
                <p className="m-0">
                  <strong>student@strive.school</strong>
                </p>
                <p className="m-0 text-black-50">Password: ********</p>
                <p className="m-0 text-black-50">Phone: 321 044 1279</p>
              </Col>
              <Col className="d-flex flex-column">
                <ul className="list-unstyled text-end">
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Change account email
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Change phone number
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex">
              <Col className="d-flex flex-column flex-lg-row">
                <div className="d-flex flex-row align-items-center">
                  <i className="bi bi-paypal"></i>
                  <p className="fw-bold pe-3 m-0">
                    <em>PayPal</em>
                  </p>
                </div>
                <p className="m-0">
                  <strong>admin@strive.school</strong>
                </p>
              </Col>
              <Col>
                <ul className="list-unstyled text-end">
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Update payment info
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Billing details
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Col>
              <ul className="list-unstyled text-end">
                <li>
                  <a href="#e" className="text-decoration-none">
                    Redeem gift card or promo code
                  </a>
                </li>
                <li>
                  <a href="#e" className="text-decoration-none">
                    Where to buy gift cards
                  </a>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={4}>
            <h6 className="text-black-50">PLAN DETAILS</h6>
          </Col>
          <Col xs={6} lg={8} className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center">
              <p className="pe-4 m-0">
                <strong>Premium</strong>
              </p>
              <i className="bi bi-badge-hd-fill"></i>
            </div>
            <p className="text-end m-0">
              <a href="#e" className="text-decoration-none">
                Change plan
              </a>
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={4}>
            <h6 className="text-black-50">SETTINGS</h6>
          </Col>
          <Col xs={12} lg={8}>
            <ul className="list-unstyled text-start">
              <li>
                <a href="#e" className="text-decoration-none">
                  Parental control
                </a>
              </li>
              <li>
                <a href="#e" className="text-decoration-none">
                  Test participation
                </a>
              </li>
              <li>
                <a href="#e" className="text-decoration-none">
                  Manage download devices
                </a>
              </li>
              <li>
                <a href="#e" className="text-decoration-none">
                  Activate a device
                </a>
              </li>
              <li>
                <a href="#e" className="text-decoration-none">
                  Recent devices streaming activity
                </a>
              </li>
              <li>
                <a href="#e" className="text-decoration-none">
                  Sign out of all devices
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={4}>
            <h6 className="text-black-50">MY PROFILE</h6>
          </Col>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={6}>
                <div className="d-flex align-items-center">
                  <a href="profile.html">
                    <Image src="" alt="" width="30px" height="30px" roundedCircle />
                  </a>
                  <p className="ps-3 m-0">
                    <strong>Strive Student</strong>
                  </p>
                </div>
                <ul className="list-unstyled text-start">
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Language
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Playback settings
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Subtitle appearance
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled text-end">
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Manage profiles
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Add profile email
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Viewing activity
                    </a>
                  </li>
                  <li>
                    <a href="#e" className="text-decoration-none">
                      Ratings
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Settings;
