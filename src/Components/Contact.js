import React , {setState} from 'react';
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com';


function Contact(props) {
  // const [toSend, setToSend] = useState({
  //   to_name: '',
  //   reply_to: '',
  //   contactSubject: '',
  //   message: '',
  // });


  if (!props.data) return null;
  const name = props.data.name;
  const city = props.data.address.city;
  const state = props.data.address.state;
  const zip = props.data.address.zip;
  const phone = props.data.phone;
  const message = props.data.contactmessage;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
      .then((result) => {
          alert("Votre message a bien été envoyé.");
       
      }, (error) => {
        alert("Il y'a eu une erreur lors de l'envoie de votre message, réessayez ultérieurement.");
      });
      e.target.reset();

    }
  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Me contacter.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">

            <form id="form" onSubmit={sendEmail}>
              <div>
                <label htmlFor="contactName">
                  Votre nom <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="from_name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Votre email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="reply_to"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Sujet</label>
                <input
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  
                  // onChange={handleChange}
                  // value={toSend.contactSubject}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Votre message <span className="required">*</span>
                </label>
                <textarea

                  type="text"
                  id="contactMessage"
                  name="message"
                  required
                ></textarea>
              </div>

              <div>
                <button className="submit" type="submit">Envoyer</button>
              </div>
            </form>


          </div>
        </Slide>
        <div id="message-warning"> Error boy</div>
        <div id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!
          <br />
        </div>
        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Adresse et téléphone</h4>
              <p className="address">
                {name}
                <br />
                {zip}, {city} - {state} 
                <br />
                <span>{phone}</span>
              </p>
            </div>



          </aside>
        </Slide>
      </div>




    </section>

  );
}



export default Contact;
