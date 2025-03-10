"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { toast, useToast } from "@/components/ui/use-toast"
import { CheckIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const includedFeatures = [
  'Private forum access',
  'Member Resources',
  'Entry to annual conference',
  'Official member equipment',
]

const Pricing = () => {

  return (
    <section className='min-h-screen pt-12 pb-20 text-black'>
      <div className='container mx-auto'>

        <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
          <div className="flex items-center justify-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              My Pricing
            </div>
          </div>
        </Fade>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Memories worth love cherishing</h2>
          </Fade>
          <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
            <p className='mt-6 text-lg leading-8'>
              Create the memories & celebrate the magic with Solene - a beautifully designed wedding photography theme that has it all.
            </p>
          </Fade>
        </div>
        {/* pricing data */}
        <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
          <div className='mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            {/* left Section */}
            <div className='p-8 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight'>lifetime Membership</h3>
              <p className='mt-6 text-base leading-7'>
                Create the memories & celebrate the magic whit Solene - a beautifully designed wedding phography theme that has it all.
              </p>
              <div className='mt-10 flex items-center gap-x-4'>
                <h4>What&copy;s included</h4>
                <div className='h-px flex-auto bg-gray-100'></div>
              </div>
              <ul role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {
                  includedFeatures.map((feature) => (
                    <li key={feature} className="flex text-muted-foreground gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary" />
                      {feature}

                    </li>
                  ))
                }

              </ul>
            </div>
            {/* right section */}
            <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="bg-tertiary dark:bg-gray-500  h-full py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">$349</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide">USD</span>
                  </p>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Purchase Successfully",
                        description: "Friday, Febrauary 10, 2024 at 5:57",
                        action: (
                          <ToastAction altText="close">Close</ToastAction>
                        ),
                      })
                    }}
                    className="gap-x-2 mt-2">
                    Purchase
                  </Button>

                  <p className="mt-6 text-xs leading-5">
                    Invoices and recipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>

  )
}

export default Pricing