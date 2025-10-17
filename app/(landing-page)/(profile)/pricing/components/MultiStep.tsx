
"use client";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function MultiStep() {
    const [currentStep, setCurrentStep] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center justify-center container bg-gray-100 p-4">
            {/* Progress Bar */}
            <div className="flex w-full max-w-lg items-center">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 relative text-center">
                        {/* Step Circle */}
                        <div
                            onClick={() => setCurrentStep(index)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-sm font-bold cursor-pointer transition-all
                ${index === currentStep ? "bg-blue-600" : "bg-gray-300"}`}
                        >
                            {index + 1}
                        </div>

                        {/* Progress Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute top-1/2 left-10 w-full h-1 transition-all
                  ${index < currentStep! ? "bg-blue-600" : "bg-gray-300"}`}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Label */}
            {currentStep !== null && <h2 className="text-lg font-semibold mt-6">{steps[currentStep]}</h2>}

            {/* Navigation Buttons (Only Show When Step is Selected) */}
            {currentStep !== null && (
                <div className="mt-6 flex gap-4">
                    {currentStep > 0 && (
                        <button
                            onClick={() => setCurrentStep((prev) => (prev !== null ? prev - 1 : prev))}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            Back
                        </button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button
                            onClick={() => setCurrentStep((prev) => (prev !== null ? prev + 1 : prev))}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

