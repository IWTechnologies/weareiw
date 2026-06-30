"use client"
import { useForm, ValidationError } from "@formspree/react";

type ContactProps = {
    buttonColor?: "bg-white" | "bg-brand-black";
    buttonTextColor?: "text-white" | "text-brand-black";
    buttonTextHover?: "text-white" | "text-brand-black";
    buttonBorderColor?: "border-white" | "border-brand-black";
};

export default function ContactUs({ buttonColor="bg-white", buttonTextColor="text-brand-black", buttonTextHover="text-white", buttonBorderColor="border-white" }: ContactProps) {
  const [state, handleSubmit] = useForm("xgobnjqp");

  if (state.succeeded) {
    return (
        <div className="w-full flex flex-col p-4 gap-4">
            <h3>
                Form submitted!
            </h3>
            <p>
                Thank you for reaching out and showing interest, one of our reps will be in touch to help.
            </p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* name fields */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="firstName" className="pl-2">First Name:</label>
                <input id="firstName" type="text" name="firstName" required 
                className="w-full p-2 rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="lastName" className="pl-2">Last Name:</label>
                <input id="lastName" type="text" name="lastName" required 
                className="w-full p-2 rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
        </div>

        {/* company field */}
        <div className="w-full flex flex-col gap-2">
            <label htmlFor="company" className="pl-2">Company:</label>
            <input id="company" type="text" name="company" required 
            className="w-full p-2 rounded-2xl bg-white text-brand-black 
            focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
            <ValidationError prefix="Company" field="company" errors={state.errors} />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* email field */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="email" className="pl-2">Email:</label>
                <input id="email" type="email" name="email" required 
                className="w-full p-2 rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* phone field */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="phone" className="pl-2">Phone:</label>
                <input id="phone" type="tel" name="phone" placeholder="000-000-0000" required 
                className="w-full p-2 rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
        </div>

        {/* industry and reason for reaching out selections */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-2">
                <label htmlFor="industry" className="pl-2">
                    What industry best describes your company?
                </label>
                <select name="industry" id="industry" required
                className="w-full p-2 rounded-xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                    <option value="">--Please choose an option--</option>
                    <option value="retail">Retail</option>
                    <option value="grocery">Grocery</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="dealer-var">Dealer/VAR</option>
                    <option value="convenience-petroleum">Convenience/Petroleum</option>
                    <option value="distribution">Distribution</option>
                    <option value="other">Other</option>
                </select>
                <ValidationError prefix="Industry" field="industry" errors={state.errors} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-2">
                <label htmlFor="inquiries" className="pl-2">
                    I'd like to...
                </label>
                <select name="inquiries" id="inquiries" required
                className="w-full p-2 rounded-xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                    <option value="">--Please choose an option--</option>
                    <option value="schedule-demo">Schedule a demo</option>
                    <option value="service-quote">Request quote for services</option>
                    <option value="purchase-inquiry">Buy parts or product</option>
                    <option value="dispose-equipment">Dispose of equipment</option>
                    <option value="sell-equipment">Sell equipment</option>
                    <option value="support-request">Request support</option>
                    <option value="learn-more">Learn more</option>
                </select>
                <ValidationError prefix="Inquiries" field="inquiries" errors={state.errors} />
            </div>
        </div>


        {/* additional info text area */}
        <div className="w-full flex flex-col gap-2">
            <label htmlFor="message" className="pl-2">Additional info:</label>
            <textarea id="message" name="message" 
            className="p-2 rounded-2xl bg-white text-brand-black
            focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
            </textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        
        {/* recaptcha v3 */}
        <div className="g-recaptcha" data-sitekey="6LdH1zwtAAAAAG6oT5FEke8aaYvzxE_JZIUaVdRo"></div>
        {/* submit button */}
        <button type="submit" disabled={state.submitting} 
        className={`w-full md:w-[50%] lg:w-fit h-fit mx-auto mt-4 px-4 py-2 text-center 
        border-3 ${buttonBorderColor} ${buttonColor} ${buttonTextColor} rounded-md
        hover:cursor-pointer hover:bg-transparent hover:${buttonTextHover} active:bg-transparent active:text-white
        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
        transition duration-300 ease-in-out`}>
        Let's Talk
        </button>
        <ValidationError errors={state.errors} />
    </form>
  );
}
