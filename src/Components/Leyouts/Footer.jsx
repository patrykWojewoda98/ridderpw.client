import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <h5>Wiecej o RidderPW znajdziesz na</h5>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  Chcesz otrzymywać powiadomienia o nadchodzących promocjach?
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput contrast type="email" className="mb-4" />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subskrybuj
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          RidderPW SA.
        </a>
      </div>
    </MDBFooter>
  );
}
