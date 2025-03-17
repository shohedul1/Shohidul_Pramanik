import { Fade } from "react-awesome-reveal";


const FirstDesing = () => {
    return (
        <>

            {/* Right Side (Banner Video) */}
            <div className="flex flex-col items-center ">
                <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce>
                    <div className="flex justify-center w-full">
                        <video
                            src="/about/Shohidul_Pramanick.mp4"
                            className="rounded-xl w-full max-w-[500px] h-auto"
                            loop
                            controls
                        />
                    </div>
                </Fade>

            </div>
        </>
    );
};

export default FirstDesing;


