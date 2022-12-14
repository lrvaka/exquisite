import Link from "next/link";
import { useState } from "react";
import * as fbq from ".././../../lib/fpixel";

const FinalInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const [isSent, setIsSent] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      {isSent ? (
        <div className="text-center">
          <p className="text-xl mb-10">
            Thank you for your submission! We&apos;ll get in touch with you
            right away!
          </p>
          <Link passHref href="/">
            <a className=" hover:underline font-heading text-theme-100 text-xl">
              Check out our website
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div className="text-xl lg:text-2xl mb-4 text-center">
            How can we reach out?
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetch(`https://hooks.zapier.com/hooks/catch***REMOVED***`, {
                method: "POST",
                body: JSON.stringify(formData),
              })
                .then(() => setIsSent(true))
                .then(() => fbq.lead())
                .catch(() => alert("There was an error, please try again"));
            }}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="w-full bg-emerald-100 rounded-sm p-2 text-xl text-black"
              type="input"
              id="fname"
              required
              name="fname"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="w-full bg-emerald-100 rounded-sm p-2 text-xl text-black"
              type="input"
              id="lname"
              required
              name="lname"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <input
              className="w-full bg-emerald-100 rounded-sm p-2 text-xl text-black"
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
            <input
              className="w-full bg-emerald-100 rounded-sm p-2 text-xl text-black"
              type="email"
              id="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              className="w-full bg-emerald-100 rounded-sm p-2 text-xl text-black"
              type="input"
              id="company"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />

            <div className="flex justify-center gap-20">
              <button
                className=" w-fit bg-emerald-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
                onClick={() => {
                  setPage(page - 1);
                  setX(-1000);
                }}
              >
                Back
              </button>
              <input
                type="submit"
                className="w-fit bg-theme-200 text-theme-500 rounded-sm p-2 text-xl mt-10 self-center"
                // onClick={() => {
                //   setPage(page + 1);
                //   setX(1000);
                // }}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default FinalInfo;
