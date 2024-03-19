import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import spinner from '../assets/Intersection.gif';
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { PiBagFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import UserNotFound from "./UserNotFound";
import "./Card.css";
import ShareButton from "../Components.jsx/ShareButton";


const CardForUser = (prop) => {
  const id = prop.id;
  const navigate = useNavigate();

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ocard-backend-new.vercel.app/api/myform/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data.dataID);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserNotFound(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  function getInstagramIdFromLink(link) {
    const usernameRegex =
      /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([A-Za-z0-9_]+)/;
    const match = link.match(usernameRegex);

    if (match && match[1]) {
      return match[1]; // Extracted username from the link
    } else {
      return null; // Link doesn't match the Instagram format
    }
  }

  function getLinkedInIdFromLink(link) {
    const usernameRegex =
      /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([A-Za-z0-9_-]+)/;
    const match = link.match(usernameRegex);

    if (match && match[1]) {
      return match[1]; // Extracted username from the link
    } else {
      return null; // Link doesn't match the LinkedIn format
    }
  }
  function getFacebookIdFromLink(link) {
    const usernameRegex =
      /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(pages\/)?([A-Za-z0-9._%-]+)/;
    const match = link.match(usernameRegex);

    if (match && match[2]) {
      return match[2]; // Extracted username or page name from the link
    } else {
      return null; // Link doesn't match the Facebook format
    }
  }
  function getTwitterIdFromLink(link) {
    const usernameRegex =
      /(?:https?:\/\/)?(?:www\.)?twitter\.com\/([A-Za-z0-9_]+)/;
    const match = link.match(usernameRegex);

    if (match && match[1]) {
      return match[1]; // Extracted username from the link
    } else {
      return null; // Link doesn't match the Twitter format
    }
  }

  if (userNotFound) {
    return (
      <>
        <Link to="/user/edit">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        </Link>
        <UserNotFound />
      </>
    );
  } else {
    return (
      <>
        <div className="main p-20">

          {loading ? (
            <div className="spinner-container">
              <img
                src={spinner}
                className="w-100 mx-auto block mt-40"
                alt="Loading..."
              />
            </div>
          ) : (
            <>
              <div className=" bg-slate-200 w-full">
              <div className="p-2 w-fit rounded-sm absolute right-0 top-0 ">
                  <button className=" hover:bg-slate-400 text-black font-bold sm:py-2 sm:px-4 rounded">
                    Logout
                  </button>
                </div>
                <div className="p-2 w-fit rounded-sm absolute left-0 top-0">
                  <Link to="/user/edit">
                    <button className=" hover:bg-slate-400 text-black font-bold sm:py-2 sm:px-4 rounded">Edit</button>
                  </Link>
                </div>
                
                
              </div>

              <div className=" word-wrap-break-word mt-[50px] mx-auto w-80 sm:w-[600px] md:max-w-600 shadow-md rounded-lg relative border">
                <div className="flex justify-end ">

                      <ShareButton id={id}></ShareButton>
                </div>
                <div className=" ">
                  <img
                    src={formData.user_profile}
                    alt="user-profile"
                    className="w-full h-auto rounded-10 relative object-contain"
                  />

                </div>

                <div className="flex flex-row justify-between pr-10 ml-4">
                  <div className="border-dotted border-l-2 border-sky-500 pl-8">
                    <p className="text-2xl sm:text-4xl font-bold mb-3">{formData.name} </p>
                    <p className="text-xl sm:text-2xl font-semibold mb-1">{formData.title}</p>
                    <p className="text-l font-semibold">{formData.department}</p>
                    <p className=" text-sm font-semibold mb-1 italic">{formData.company}</p>
                  </div>

                  <div className="">
                    <img src={formData.user_icon} alt="icon" className=" w-[100px] h-auto hidden sm:block" />
                  </div>
                </div>

                <p className="media-class">{formData.headline}</p>

                <div className="contact-details">
                  {formData.email ? (
                    <a href={"mailto:" + formData.email} className="custom-link">
                      <div className="email-box">
                        <div className="mobile-icon">
                          <MdEmail className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-style">
                          <h3>{formData.email}</h3>
                        </div>
                      </div>
                    </a>
                  ) : (
                    ""
                  )}

                  {formData.phone ? (
                    <a href={`tel:+91` + formData.phone} className="custom-link">
                      <div className="mobile-box">
                        <div className="mobile-icon">
                          <BsTelephoneFill className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-style">
                          <h3>+91 {formData.phone}</h3>
                        </div>
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
		{formData.whatsapp ? (
                <a
                  href={`https://wa.me/+91` + formData.whatsapp}
                  className="custom-link"
                >
                  <div className="mobile-box py-3">
                    <div className="mobile-icon">
                      <IoLogoWhatsapp
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>+91 {formData.whatsapp}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.telegram ? (
                <a
                  href={`https://t.me/+91` + formData.telegram}
                  className="custom-link"
                >
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <FaTelegramPlane
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>+91 {formData.telegram}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.websiteurl ? (
                <a href={formData.websiteurl} className="custom-link">
                  <div className="mobile-box py-3">
                    <div className="mobile-icon">
                      <PiBagFill
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{formData.websiteurl}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.link ? (
                <a href={formData.link} className="custom-link">
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <FaLink
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{formData.link}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.instagram ? (
                <a href={formData.instagram} className="custom-link">
                  <div className="mobile-box py-3">
                    <div className="mobile-icon">
                      <AiFillInstagram
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{`@${getInstagramIdFromLink(formData.instagram)}`}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.linkedin ? (
                <a href={formData.linkedin} className="custom-link">
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <FaLinkedinIn
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{`@${getLinkedInIdFromLink(formData.linkedin)}`}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.facebook ? (
                <a href={formData.facebook} className="custom-link">
                  <div className="mobile-box py-3">
                    <div className="mobile-icon">
                      <FaFacebookF
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{`@${getFacebookIdFromLink(formData.facebook)}`}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.discord ? (
                <a href={formData.discord} className="custom-link">
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <BsDiscord
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{formData.discord}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.xcom ? (
                <a href={formData.xcom} className="custom-link">
                  <div className="mobile-box py-3">
                    <div className="mobile-icon">
                      <FaTwitter
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{`@${getTwitterIdFromLink(formData.xcom)}`}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
              {formData.upi ? (
                <a href={`upi://${formData.upi}`} className="custom-link">
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <FaRupeeSign
                        style={{ height: "25px", width: "25px", color: "white" }} />
                    </div>
                    <div className="text-style">
                      <h3>{formData.upi}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                ""
              )}
                  {/* Add other contact details with similar structure */}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
};

export default CardForUser;
