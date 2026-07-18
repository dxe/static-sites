"use client";

import { useState } from "react";

const inputClasses =
  "w-full border border-[#a9a9a9] bg-[#fafafa] p-[10px] text-[18px] text-black outline-none focus:border-alc-ink";

function FieldLabel({
  children,
  small = false,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <span className={small ? "text-[13px]" : "text-[18px]"}>
      {children}{" "}
      <span className={`text-[#777] ${small ? "text-[12px]" : "text-[13px]"}`}>
        (required)
      </span>
    </span>
  );
}

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // The original Squarespace form posted to Squarespace's backend, which a
  // static export can't do — fall back to the visitor's mail client instead.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `${message}\n\n— ${firstName} ${lastName} (${email})`;
    window.location.href = `mailto:info@liberationconference.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-9">
      <fieldset>
        <legend className="text-[18px]">Name</legend>
        <div className="mt-2 grid grid-cols-1 gap-[10px] sm:grid-cols-2">
          <label className="block">
            <FieldLabel small>First Name</FieldLabel>
            <input
              type="text"
              name="fname"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`${inputClasses} mt-1`}
            />
          </label>
          <label className="block">
            <FieldLabel small>Last Name</FieldLabel>
            <input
              type="text"
              name="lname"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`${inputClasses} mt-1`}
            />
          </label>
        </div>
      </fieldset>

      <label className="mt-5 block">
        <FieldLabel>Email Address</FieldLabel>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClasses} mt-1`}
        />
      </label>

      <label className="mt-5 block">
        <FieldLabel>Subject</FieldLabel>
        <input
          type="text"
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${inputClasses} mt-1`}
        />
      </label>

      <label className="mt-5 block">
        <FieldLabel>Message</FieldLabel>
        <textarea
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} mt-1 h-[100px] resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 cursor-pointer rounded-full bg-white px-[45px] py-[18px] font-button text-[18px] leading-none text-black shadow-[0_2px_0_0_#ebebeb] transition-opacity hover:opacity-80"
      >
        Submit
      </button>
    </form>
  );
}
