"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "@/app/(landing-page)/components/Notification/Notification";

const ApplyFormModal = ({
  open,
  setOpen,
  selectedPlan,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedPlan: string | null;
}) => {
  const router = useRouter(); // ✅ Initialize router
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, selectedPlan }),
      });

      const data = await response.json(); // ✅ Only call response.json() once

      if (data.success) { // ✅ Now checks `success` properly
        toast.success(data.message, { position: 'top-right' });
        setFormData({ name: "", email: "", phone: "" });
        setOpen(false);
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        toast.error(data.error || "There was a problem with your request.", { position: 'top-right' });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", { position: 'top-right' });
      console.log(error);
    }
  };


  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Apply for {selectedPlan}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="name" value={formData.name} placeholder="Your Name" required onChange={handleChange} />
              <Input type="email" name="email" value={formData.email} placeholder="Your Email" required onChange={handleChange} />
              <Input type="text" name="phone" value={formData.phone} placeholder="Your Phone" required onChange={handleChange} />

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>

            <DialogClose asChild>
              <Button variant="outline" className="w-full">Cancel</Button>
            </DialogClose>
          </DialogContent>
        </motion.div>
      </Dialog>
      <Notification />
    </>
  );
};

export default ApplyFormModal;
