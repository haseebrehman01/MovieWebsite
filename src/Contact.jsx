import { Form, useActionData, useNavigation } from "react-router-dom";
import { useEffect, useRef } from "react";

// 🔹 Action function that runs when <Form> is submitted
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);

    console.log("Form Data:", data);

    // Simulating success (you could send data to backend here)
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (e) {
    console.log(e);
    return { success: false, message: "Something went wrong, please try again." };
  }
};

export const Contact = () => {
  const actionData = useActionData();
  const navigation = useNavigation(); // to check form state (submitting or idle)
  const formRef = useRef(); // reference to the form element

  // 🔹 Reset form fields after successful submission
  useEffect(() => {
    if (actionData?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [actionData]);

  return (
    <>
      <section className="container">
        <h2 className="section-common--heading">Contact Us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        {/* Show success or error message after form submission */}
        {actionData && (
          <p
            style={{
              color: actionData.success ? "green" : "red",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {actionData.message}
          </p>
        )}

        <div className="section-contact">
          <div className="grid grid-two--cols">
            {/* 🔹 Left side - Contact form */}
            <div className="contact-content">
              <Form method="POST" action="/contact" ref={formRef}>
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@example.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="We are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn contact-btn"
                    disabled={navigation.state === "submitting"} // disable while sending
                  >
                    {navigation.state === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </div>
              </Form>
            </div>

            {/* 🔹 Right side - Contact image */}
            <div className="contact-image">
              <figure>
                <img
                  src="/contact.png"
                  alt="contact illustration"
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
