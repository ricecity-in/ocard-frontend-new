import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css"; // Import your form styles
import axios from "axios";
import { Link, Navigate } from "react-router-dom";



const Edit = () => {



  const token = localStorage.getItem("token");
  
  const isLogin = localStorage.getItem("isLogin");
  const [formData, setFormData] = useState([]);
  const [email, setEmail] = useState("");
  const [websiteurl, setWebsiteurl] = useState("");
  const [link, setLink] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [xcom, setXcom] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const [upi, setUPI] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [headline, setHeadline] = useState("");
  const [user_profile, setUserProfile] = useState("");
  const [user_icon, setUserIcon] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ocard-backend-new.vercel.app/api/myform/${token}`
        ); // A
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data.dataID);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);


  console.log("formData: ",formData); //get all data

  useEffect(() => {
    // This useEffect will update the email state when formData changes
    if (formData) {
      setEmail(formData.email);
      setWebsiteurl(formData.websiteurl || "");
      setLink(formData.link || "");
      setInstagram(formData.instagram || "");
      setLinkedin(formData.linkedin || "");
      setFacebook(formData.facebook || "");
      setXcom(formData.xcom || "");
      setPhone(formData.phone || "");
      setWhatsapp(formData.whatsapp || "");
      setTelegram(formData.telegram || "");
      setDiscord(formData.discord || "");
      setUPI(formData.upi || "");
      setName(formData.name || "");
      setTitle(formData.title || "");
      setDepartment(formData.department || "");
      setCompany(formData.company || "");
      setHeadline(formData.headline || "");
      setUserProfile(formData.user_profile || "");
      setUserIcon(formData.user_icon || "");
      setId(formData._id);
    }
  }, [formData]);

  const handleUserProfileChange = (e) => {
    setUserProfile(e.target.value);
  };

  const handleUserIconChange = (e) => {
    setUserIcon(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(token);
  };

  const handleWebsiteurlChange = (e) => {
    setWebsiteurl(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };

  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value);
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleXcomChange = (e) => {
    setXcom(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleWhatsappChange = (e) => {
    setWhatsapp(e.target.value);
  };

  const handleTelegramChange = (e) => {
    setTelegram(e.target.value);
  };

  const handleDiscordChange = (e) => {
    setDiscord(e.target.value);
  };

  const handleUpiChange = (e) => {
    setUPI(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("id: ", id);
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://ocard-backend-new.vercel.app/api/form/${id}`,
        {
          name,
          user_profile,
          user_icon,
          title,
          department,
          company,
          headline,
          email,
          websiteurl,
          link,
          instagram,
          linkedin,
          facebook,
          xcom,
          phone,
          whatsapp,
          telegram,
          discord,
          upi,
        }
      );
      console.log("Data updated success:", response.data);
      // Handle success, redirect user, etc.
    } catch (error) {
      if (error.response) {
        console.error("Error updating data:", error.response.data);
      }
    }
  };

  return (
    <>
      {isLogin ? (

        <div>
          <div className="p-2 bg-slate-400 w-fit absolute rounded-sm right-0 top-0">
            <Link to="/user/dashboard"><button>Preview</button></Link>
          </div>
        <form onSubmit={handleSubmit} className="custom-form">
          
          <h6>Login as: {email}</h6>
          <h3>Personal</h3>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            type="text"
            placeholder="User Profile Link"
            value={user_profile}
            onChange={handleUserProfileChange}
          />
          <Input
            type="text"
            placeholder="User Icon"
            value={user_icon}
            onChange={handleUserIconChange}
          />

          <h3>Affiliation</h3>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <Input
            type="text"
            placeholder="Department"
            value={department}
            onChange={handleDepartmentChange}
          />
          <Input
            type="text"
            placeholder="Company"
            value={company}
            onChange={handleCompanyChange}
          />
          <Input
            type="text"
            placeholder="Headline"
            value={headline}
            onChange={handleHeadlineChange}
          />

          <h3>Most Popular</h3>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="text"
            placeholder="Website URL"
            value={websiteurl}
            onChange={handleWebsiteurlChange}
          />
          <Input
            type="text"
            placeholder="Link"
            value={link}
            onChange={handleLinkChange}
          />
          <Input
            type="text"
            placeholder="Instagram"
            value={instagram}
            onChange={handleInstagramChange}
          />
          <Input
            type="text"
            placeholder="Linkedin"
            value={linkedin}
            onChange={handleLinkedinChange}
          />
          <Input
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={handleFacebookChange}
          />

          <h3>Social</h3>
          <Input
            type="text"
            placeholder="x.com"
            value={xcom}
            onChange={handleXcomChange}
          />
          <Input
            type="text"
            placeholder="Linkedin"
            value={linkedin}
            onChange={handleLinkedinChange}
          />
          <Input
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={handleFacebookChange}
          />
          <Input
            type="text"
            placeholder="Instagram"
            value={instagram}
            onChange={handleInstagramChange}
          />

          <h3>Communication</h3>

          <Input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <Input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={handleWhatsappChange}
          />
          <Input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={handleTelegramChange}
          />
          <Input
            type="text"
            placeholder="Discord"
            value={discord}
            onChange={handleDiscordChange}
          />

          <h3>Payment</h3>
          <Input
            type="text"
            placeholder="Payment"
            value={upi}
            onChange={handleUpiChange}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Edit;
