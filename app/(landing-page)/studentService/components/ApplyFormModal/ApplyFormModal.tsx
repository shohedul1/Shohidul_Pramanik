import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ApplyFormModal = ({
  open,
  setOpen,
  selectedPlan,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedPlan: string | null;
}) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Submitted:", { ...formData, selectedPlan });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for {selectedPlan}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <Input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <Input type="text" name="phone" placeholder="Your Phone" required onChange={handleChange} />

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>

          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default ApplyFormModal;
