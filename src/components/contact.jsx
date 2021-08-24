import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
    name: "",
    email: "",
    message: "",
};
export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;        
        setState((prevState) => ({ ...prevState, [name]: value }));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
        emailjs.sendForm("service_3695fj9", "template_ra9g1vf", e.target, "user_oMoSAdxz4yHkVkcl5rgGQ").then(
            (result) => {
              alert("感謝你的聯絡，VOCK將會盡快處理。")
              setState({ ...initialState })
              e.target.reset();
            },
            (error) => {
            }
        );
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>{props.Ndata? props.Ndata.contact:'Loading'}</h2>
                                <p>請填寫以下資訊，第一時間發信給VOCK。</p>
                            </div>
                            <form name="sentMessage" validate onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" required onChange={handleChange} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required onChange={handleChange} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required onChange={handleChange}></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                                    發送信件
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>聯絡資訊</h3>
                            <p>
                                <span>
                                    <i className="fa fa-skype"></i> Skype
                                </span>
                                {props.data ? props.data.skype : "loading"}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i> Phone
                                </span>{" "}
                                {props.data ? props.data.phone : "loading"}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>{" "}
                                {props.data ? props.data.email : "loading"}
                            </p>
                        </div>
                    </div>
                    {/*           
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         */}
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
                        <a href="http://www.templatewire.com" rel="nofollow">
                            TemplateWire
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
