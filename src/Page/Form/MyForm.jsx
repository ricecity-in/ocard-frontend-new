import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css"; // Import your form styles
import axios from "axios";

const MyForm = () => {
  const token = localStorage.getItem("email");

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
    setEmail(e.target.value);
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
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/form",
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
      console.log("Data Stored success:", response.data);
      // Handle success, redirect user, etc.
    } catch (error) {
      console.error("error:", error.response.data);
    }
  };

  return (
    <>
      {token ? (
        <form onSubmit={handleSubmit} className="custom-form">
          <h6>Login as: {token}</h6>
          <h2>Add Details</h2>

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
      ) : (
        <p>login</p>
      )}
    </>
  );
};

export default MyForm;
