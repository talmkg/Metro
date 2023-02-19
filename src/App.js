import { Col, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-dark"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* <div className="bg-light p-3" style={{ width: "80vw", height: "90vh" }}>
        <div className="w-100 d-flex justify-content-start px-5 ">
          <div className="g-0">
            <div className="dot"></div>
            <div className="line w-50"></div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-light p-3" style={{ width: "80vw", height: "90vh" }}>
        <Row className="g-0" style={{ width: "35px" }}>
          <Col className="d-flex align-items-end" xs={12}>
            <div className="dot"></div>
          </Col>
          <Col xs={12}>
            <div className="line-medium w-50"></div>
          </Col>
        </Row>
        <Row className="g-0" style={{ width: "35px" }}>
          <Col className="d-flex align-items-end" xs={12}>
            <div className="dot"></div>
          </Col>
          <Col xs={12}>
            <div className="line-long w-50"></div>
          </Col>
        </Row>
        <Row className="g-0" style={{ width: "35px" }}>
          <Col className="d-flex align-items-end" xs={12}>
            <div className="dot"></div>
          </Col>
          <Col xs={12}>
            <div className="line-long w-50"></div>
          </Col>
        </Row>
        <Row className="g-0" style={{ width: "35px" }}>
          <Col className="d-flex align-items-end" xs={12}>
            <div className="dot position-relative">
              <div
                className="line-bottom"
                style={{
                  position: "absolute",
                  right: -100,
                  width: "100px",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </div> */}
      <div
        className="bg-light"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="w-100 h-25 d-flex">
          <div className="bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}>
            <div className="w-100 h-100 d-flex justify-content-center position-relative">
              <div className="VERTICAL-LINE"></div>
              <div className="dot" id="center"></div>
            </div>
          </div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
        </div>
        <div className="w-100 h-25 d-flex">
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div
            className=" h-100 bg-gray position-relative"
            style={{ width: "20%" }}
          >
            <div className="w-100 h-50 d-flex justify-content-center">
              <div className="VERTICAL-LINE"></div>
            </div>
            <div className="w-100 h-50 d-flex justify-content-end ">
              <div className="w-50 h-50 d-flex justify-content-center align-items-start">
                <div className="HORIZONTAL-LINE w-100"></div>
              </div>
            </div>
            <div className="dot" id="center"></div>
          </div>
          <div
            className=" h-100 bg-light position-relative"
            style={{ width: "20%" }}
          >
            <div className="w-100 h-100 d-flex justify-content-start align-items-end">
              <div className="w-50 h-50 d-flex justify-content-center align-items-start">
                <div className="HORIZONTAL-LINE w-100"></div>
              </div>
            </div>
            <div className="dot" id="center"></div>
          </div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
        </div>
        <div className="w-100 h-25 d-flex">
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
        </div>
        <div className="w-100 h-25 d-flex">
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-gray" style={{ width: "20%" }}></div>
          <div className=" h-100 bg-light" style={{ width: "20%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
