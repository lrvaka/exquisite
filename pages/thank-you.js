import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="font-heading font-black text-6xl text-theme-500">
        Thank you!
      </h3>
      <p className="text-2xl md:text-3xl text-theme-500 text-center">
        Thank you for your submission, we will get back to you shortly!
      </p>
    </div>
  );
}
