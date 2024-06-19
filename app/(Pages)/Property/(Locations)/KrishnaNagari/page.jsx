import React from "react";
import Image from "next/image";
import header from '../../../../../public/img/pbanner.png'
import p1 from "../../../../../public/img/carousel-7.jpg";
import p2 from "../../../../../public/img/carousel-8.jpg";
import p3 from "../../../../../public/img/nk.png";
import am1 from "../../../../../public/img/amenities1.png";
import am2 from "../../../../../public/img/amenities2.png";
import am3 from "../../../../../public/img/amenities3.png";
import am4 from "../../../../../public/img/amenities4.png";
import am5 from "../../../../../public/img/amenities5.png";
import am6 from "../../../../../public/img/amenities6.png";
import am7 from "../../../../../public/img/amenities7.png";
import am8 from "../../../../../public/img/amenities8.png";
import am9 from "../../../../../public/img/amenities9.png";
import Slideshow from "../../../../Components/Slideshow";
import Rera from "../../../../../public/img/RERA/Krishna Nagri 42-1-A RERA CODE.png";
import "../../../../styles/bootstrap.min.css";
import "../../../../styles/style.css";
import "../../../../styles/common.css";


function property1() {
  const slides = [
    {
      image: p1,
  
    },
    {
      image: p2,
  
    },
    {
    image: p3,

  },
  ];

  return (
    <div >
     {/* Header Start */}
    <div className="container-fluid header bg-white p-0" >
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row ">
        <div className="breadbox mt-4 pt-4"  style={{ textAlign: 'center'}}>
        <div
        className="text-center mx-auto m-3 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="pb-3 text-white mt-4 pt-4">
         KRISHNA NAGARI
          <hr />
        </h1>
      </div>
        </div>
        <div className="flex animated fadeIn"  >
          <Image className="img-fluid" src={header} alt="" style={{height:"350px"}}/>
        </div>
      </div>
    </div>
    {/* Header End */}
      {/* Search Start */}
      <div className="con">
        <div
          className="container-fluid mb-5 wow fadeIn p-3 "
          data-wow-delay="0.1s"
          style={{ padding: 35 }}
        >
          <div className="container">
            <div className="row g-3">
              <div className="col-md-15">
                <center>
                  <div className="section">
                    <div className="col-md-4 p-2 ">
                      <h4>7,500 Plot Sold</h4>
                    </div>
                    <div className="dash"></div>

                    <div className="col-md-4 p-2">
                      <h4>15 Years Experience</h4>
                    </div>

                    <div className="dash"></div>

                    <div className="col-md-4 p-2">
                      <h4> 395 Projects Completed</h4>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}

      {/* About Start */}
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn py-2" data-wow-delay="0.1s">
              <div className="">
                <div className="propslider">
                  <Slideshow slides={slides} />
                </div>

                <div className="some-page-wrapper pt-4">
                  <div className="section-flexer py-2">
                    <div className="colum mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am1} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Entrance</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am9} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Playground</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am3} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Drainage Line</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am6} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Sewerline</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am7} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Fencing</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am8} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Electrification</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am4} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Water Source</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am5} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Cement Road</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am2} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Tree Plantation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="como">
                <div className="Child1">
                  <h1 className="text-dark p-2">Krishna Nagari</h1>

                  <a className="tex-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width="25px"
                      height="25px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <strong m-2>JAMTHA NAGPUR</strong>
                  </a>
                  <div className="d-flex flex text-dark column mt-3">
                    <div className="">
                      <p>
                        <b>Plot Area:</b> 22 ACRES
                      </p>
                    </div>
                    <div className="px-2">
                      <p>
                        <b>Number Of Plots: </b> 321{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Child2">
                  <div className="QRtab">
                    <a href="#">
                      <Image className="QRimage" src={Rera} alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-dark mb-2">
                Welcome to our Krishna Nagari, an idyllic community thoughtfully
                designed for modern living. Spread across 22 acres, Krishna
                Nagari boasts meticulously planned spaces, ensuring a perfect
                balance between Luxury and Affordability Conveniently located
                Opposite to NCI, Krishna Nagari offers easy access to Samruddhi
                Expressway, educational institutions(IIM, DPS), healthcare
                facilities(AIIMS, NCI), and Recreational Centers (VCA Stadium),
                making it an ideal place to call home. Krishna Nagari welcomes
                you to experience the perfect harmony of modern living in a
                community that truly feels comfort, connectivity, and serenity.{" "}
              </p>

              <div className=" pt-2">
                <p className="card-title text-dark top_heading pt-2">
                  <b>Near By</b>
                </p>
                <ul className="list-inline ">
                  <li className="list-inline-item">{`1. NCI – 1 Km`}</li>
                  <li className="list-inline-item px-3">{`3. IIM’S – 1 km`}</li>
                  <li className="list-inline-item px-3">{`4. VCA stadium – 1 KM`}</li>
                </ul>
                <ul className="list-inline">
                  <li className="list-inline-item">{`2. AIIMS - 1km`}</li>
                  <li className="list-inline-item px-3">{`5. Samruddhi Express Way – 2.5 km`}</li>
                </ul>
              </div>
              <div className=" p-2">
                <a href="" className="btn btn-primary py-2 px-3 me-2">
                  <i className="fa fa-phone-alt me-2" />
                  Make A Call
                </a>
                <a href="" className="btn btn-dark py-2 px-3">
                  <i className="fa fa-calendar-alt me-2" />
                  Get Appoinment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default property1;
