"use client"
import { useForm, ValidationError } from "@formspree/react";

export default function JobForm() {
  const [state, handleSubmit] = useForm("xnjyjpqw");

  if (state.succeeded) {
    return <p>Your application has been submmitted!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
