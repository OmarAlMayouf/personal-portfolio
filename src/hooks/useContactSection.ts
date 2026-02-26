import { contactData } from "@/data/portfolio-data";
import { useToast } from "./use-toast";
import emailjs from "emailjs-com";
import { useState } from "react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface Props {
  setForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>;
}

export const useContactSection = ({ setForm }: Props) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "omaralmayouf@gmail.com",
          time: new Date().toLocaleString(),
          year: new Date().getFullYear(),
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          toast({ title: contactData.toast.title, description: contactData.toast.description });
          setForm({ name: "", email: "", message: "" });
          setIsLoading(false);
        },
        () => {
          toast({ title: "Error", description: "Failed to send message. Please try again later." });
          setIsLoading(false);
        }
      );
  };

  return { handleSubmit, isLoading };
};
