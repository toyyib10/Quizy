import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const Success = () => {
  const navigate = useNavigate();
  const [title1, settitle1] = useState("Copy link");
  const [title2, settitle2] = useState("Copy pin");
  const [colorLink, setcolorLink] = useState("black");
  const [colorPin, setcolorPin] = useState("black");
  const [id, setId] = useState("");
  const [done, setDone] = useState(false);
  const [pinned, setPin] = useState(false);
  const [modal, setModal] = useState();

  useEffect(() => {
    setId(localStorage.id);
  }, []);
  const copyLink = () => {
    let link = "https://quizy-chi.vercel.app/joinquiz";
    navigator.clipboard.writeText(link);
    setcolorLink("Green");
    settitle1("Link copied");
  };

  const copyPin = () => {
    navigator.clipboard.writeText(pinned);
    setcolorPin("Green");
    settitle2("Pin copied");
  };

  const generate = () => {
    setModal("true");
    if (!done) {
      const endPoint = "https://quizy-api.vercel.app/quiz/savePin";
      let pin = String(Math.floor(1000 + Math.random() * 9000));
      setPin(pin);
      axios.post(endPoint, { id, pin }).then((result) => {
        if (result.data.status) {
          setDone(true);
          localStorage.removeItem("id");
        }
      });
    }
  };

  const home = () => {
    navigate("/admin");
  };

  const close = () => {
    setModal(false);
  };

  return (
    <>
      <section
        className="w-100 d-flex align-content-center justify-content-center flex-column px-2 pb-3"
        style={{ height: "100vh" }}
      >
        <div className="d-flex align-content-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6em"
            height="6em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="green"
              d="m1845 1024l124 155q18 23 28 50t10 57q0 30-9 57t-26 49t-41 38t-52 24l-191 53q2 51 5 103t4 104q0 36-13 67t-37 54t-55 37t-68 14q-31 0-61-11l-185-70l-109 165q-24 36-62 57t-83 21q-44 0-82-21t-63-57l-109-165l-185 70q-30 11-61 11q-36 0-67-13t-55-37t-37-55t-14-67q0-52 3-104t6-103l-191-53q-29-8-52-24t-40-38t-26-49t-10-57q0-29 10-56t28-51l124-155L79 869q-38-47-38-107q0-30 9-57t26-49t40-38t53-24l191-53q-2-51-5-103t-4-104q0-36 13-67t37-54t55-37t68-14q31 0 61 11l185 70L879 78q24-36 62-57t83-21q44 0 82 21t63 57l109 165l185-70q30-11 61-11q36 0 67 13t55 37t37 55t14 67q0 52-3 104t-6 103l191 53q28 8 52 24t40 38t26 49t10 57q0 60-38 107l-124 155zm34 262q0-14-10-27l-188-235l188-235q10-13 10-27q0-34-34-44l-191-53l-98-27q3-76 8-152t5-152q0-17-14-30t-31-14q-6 0-27 6t-49 17t-62 24t-64 25t-56 22t-39 15l-56-85l-109-166q-13-20-38-20t-38 20L877 314l-56 85q-13-5-38-15t-57-22t-64-25t-61-23t-50-17t-27-7q-17 0-31 13t-14 31q0 76 5 152t8 152l-98 27l-191 53q-34 10-34 44q0 14 10 27l188 235l-188 235q-10 13-10 27q0 34 34 44l191 53l98 27q-3 76-8 152t-5 152q0 17 14 30t31 14q6 0 27-6t49-17t62-24t64-25t56-22t39-15l56 85l109 166q13 20 38 20t38-20l109-166l56-85q13 5 38 15t57 22t64 25t61 23t50 17t27 7q17 0 31-13t14-31q0-76-5-152t-8-152l98-27l191-53q34-10 34-44zm-983-97l467-466l90 90l-557 558l-301-302l90-90l211 210z"
            />
          </svg>
        </div>
        <div className="d-flex align-content-center justify-content-center my-3">
          <div className="fs-4 text-center">
            Quiz has been saved successfully
          </div>
        </div>
        <div className="d-flex align-content-start justify-content-center my-3">
          <div className="fs-4">Generate quiz link</div>
          <button
            className="btn ms-2 btn-success btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropLive"
            onClick={generate}
            type="button"
          >
            Generate
          </button>
        </div>
        <div className="d-flex align-content-center justify-content-center my-3">
          <div className="fs-4">Back to home page</div>
          {done ? (
            <button onClick={home} className="btn ms-2 btn-danger btn-sm">
              Home Page
            </button>
          ) : (
            <button disabled className="btn ms-2 btn-danger btn-sm">
              Home Page
            </button>
          )}
        </div>
      </section>
      <Modal show={modal}>
        <ModalHeader className="d-flex justify-content-center">
          <ModalTitle>Quiz link and pin</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <input
              className="col-10 me-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Quiz link"
              value="https://quizy-chi.vercel.app/joinquiz"
              disabled
            />
            <button
              className="btn mx-1"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              onClick={copyLink}
              title={title1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colorLink}
                  d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z"
                />
              </svg>
            </button>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <input
              className="col-10 me-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Quiz pin"
              value={pinned}
              disabled
            />
            <button
              className="btn mx-1"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              onClick={copyPin}
              title={title2}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colorPin}
                  d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z"
                />
              </svg>
            </button>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            onClick={close}
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Success;
