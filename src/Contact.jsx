import { Form } from "react-router-dom";

// 🔹 ye function action ke liye hai jo <Form> submit hone par chalega
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData(); // form se data nikal rahe ho
    const data = Object.fromEntries(res); // us data ko JS object mai convert kar rahe ho
    console.log(data); // abhi ke liye console par check kar rahe ho
    return null; // abhi koi response nahi bhej rahe
  } catch (e) {
    console.log(e); // agar error aayi to console par show hoga
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container">
        <h2 className="section-common--heading">contact us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact">
          <div className="grid grid-two--cols">
            {/* 🔹 Left side - Contact form */}
            <div className="contact-content">
              {/* Form jo react-router-dom ka hai */}
              <Form method="POST" action="/contact">
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@thapa.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"   // 🔹 yahan tumne extra space de diya tha "message "
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
              </Form>
            </div>

            {/* 🔹 Right side - Contact image */}
            <div className="contact-image">
              <figure>
                <img
                  src="/contact.png"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
