import { NavBar } from "../components/Navbar";
import { ContactImg } from "../components/ContactImg.js";
// import { Form } from "../components/Form.js";
import { Footer } from "../components/Footer";
// import { db } from "../Firebase/firebase";

// import { useState } from "react";
export function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  //   const [loader, setLoader] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoader(true);

  //     db.collection("contacts")
  //       .add({
  //         name: name,
  //         email: email,
  //         subject: subject,
  //         message: message,
  //       })
  //       .then(() => {
  //         setLoader(false);
  //         alert("Your message has been submitted👍");
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //         setLoader(false);
  //       });

  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   };

  // console.log("hey khizer ===", db);
  return (
    <>
      <div>
        <NavBar />
        <ContactImg />
        <div className="form">
          <form>
            <label>Your name</label>
            <input
              type="text"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Email</label>
            <input
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Subject</label>
            <input
              type="text"
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
            ></input>
            <label>Message</label>
            <textarea
              rows={6}
              placeholder="type your message here"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
