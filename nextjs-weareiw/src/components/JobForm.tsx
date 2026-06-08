"use client"
import { useForm, ValidationError } from "@formspree/react";

type JobProps = {
    jobTitle: string;
    jobCategory: string;
};

export default function JobForm({ jobTitle, jobCategory }: JobProps) {
  const [state, handleSubmit] = useForm("xnjyjpqw");

  if (state.succeeded) {
    return (
        <div className="w-full flex flex-col p-4 gap-4">
            <h3>
                Application Submitted!
            </h3>
            <p>
                Thank you for applying for the {jobTitle} role at IW Technologies.
            </p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* hidden fields */}
        <input type="hidden" name="jobTitle" value={jobTitle} />
        <input type="hidden" name="jobCategory" value={jobCategory} />

        {/* name fields */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="firstName" className="pl-2">First Name:</label>
                <input id="firstName" type="text" name="firstName" required 
                className="w-full p-2 border rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="lastName" className="pl-2">Last Name:</label>
                <input id="lastName" type="text" name="lastName" required 
                className="w-full p-2 border rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* email field */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="email" className="pl-2">Email:</label>
                <input id="email" type="email" name="email" required 
                className="w-full p-2 border rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* phone field */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <label htmlFor="phone" className="pl-2">Phone:</label>
                <input id="phone" type="tel" name="phone" required 
                className="w-full p-2 border rounded-2xl bg-white text-brand-black 
                focus:bg-background focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
        </div>

        {/* resume and cover letter upload fields will go here */}

        

        {/* submit button */}
        <button type="submit" disabled={state.submitting} 
        className="w-fit h-fit mx-auto mt-4 px-4 py-2 text-center 
        border-3 border-white bg-white text-brand-black rounded-md
        hover:cursor-pointer hover:bg-transparent hover:text-white active:bg-transparent active:text-white
        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
        transition duration-300 ease-in-out">
        Submit Application
        </button>
        <ValidationError errors={state.errors} />
    </form>
  );
}
