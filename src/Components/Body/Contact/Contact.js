import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <br />
      <br />
      <div className="fluid bg-dark" id="contact">
        <div className="container">
          <br />
          <h3 className="text-white">Contact</h3> <br />
          <br />
          <div>
            <p className="text-white">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here.It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English
            </p>
          </div>
          <form
            action="mailto:TestEmail@gmail.com"
            method="post"
            encType="text/plain"
          >
            >
            <div className="form-group">
              <div className="form-row">
                <div className="col-7">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <br /> <br /> <br />
                <div className="col-7">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <br /> <br /> <br />
                <div className="col-7">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <br /> <br /> <br />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Type you Message "
                ></textarea>
                <input
                  className="btn btn-primary mt-5"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}
export default Contact;
