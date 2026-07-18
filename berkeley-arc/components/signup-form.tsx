"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "h-8 w-65 max-w-full border border-[#767676] bg-white px-2 text-base text-black";

export function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    const body = new URLSearchParams({
      name: String(data.get("subscriber-name") ?? ""),
      email: String(data.get("subscriber-email") ?? ""),
      id: "arc-signup",
      fullHref: window.location.href,
    });

    try {
      const res = await fetch("https://petitions-229503.appspot.com/api/sign", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;" },
        body: body.toString(),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-xl font-light leading-7.5 text-arc-text">
        Thank you! Your submission has been received!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-1 text-arc-text"
    >
      <label htmlFor="subscriber-name">Name</label>
      <input
        id="subscriber-name"
        name="subscriber-name"
        type="text"
        required
        className={inputClasses}
      />
      <label htmlFor="subscriber-email" className="mt-3">
        Email
      </label>
      <input
        id="subscriber-email"
        name="subscriber-email"
        type="email"
        required
        className={inputClasses}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 cursor-pointer rounded-xs border border-[#767676] bg-[#efefef] px-3 py-0.5 text-base text-black hover:bg-[#e4e4e4] disabled:cursor-default disabled:opacity-60"
      >
        {status === "submitting" ? "Please wait..." : "Submit"}
      </button>
      {status === "error" && (
        <p className="mt-4 text-lg font-light text-arc-red">
          Oops! Something went wrong while submitting the form.
        </p>
      )}
    </form>
  );
}
