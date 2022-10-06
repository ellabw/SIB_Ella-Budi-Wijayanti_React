import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <div className="container">
          <Link to="/" className="btn btn-primary btn-lg" type="button" role="button">
            Back to Home
          </Link>
          <div className="about">
            <h1 className="my-4">
              <b>About Me</b>
            </h1>
            <h5>
              <b>Nama:</b> Ella Budi Wijayanti
            </h5>
            <h5>
              <b>Kode Peserta:</b> RCTN-KS05-005
            </h5>
            <h5>
              <b>Hobi:</b> Jogging
            </h5><br /> <br />
            <h1 className="my-4">
              <b>Progress Aplikasi per sesi</b>
            </h1>
            <h5>Sesi 1 s.d 12 sudah/done</h5>


          </div>
        </div>
      </div>
    </>
  );
};

export default About;