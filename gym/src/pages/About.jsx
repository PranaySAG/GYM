import { Globe } from "../components/Globe.jsx";
import Card from "../components/Card.jsx";
import { useRef } from "react";
import  Copy  from "../components/Copy.jsx";
import Framework from "../components/FrameWork.jsx";
function About() {
  const grid2Container = useRef();
  return (
    <section className="c-space selection-spacing">
      <h2 className="text-heading">About Us</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/bulid.jpg"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Fitness Enthusiasts</p>
            <p className="subtext">
              We are a team of fitness enthusiasts dedicated to helping you
              achieve your fitness goals.
            </p>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
        </div>
        {/* grid2 */}
        <div className="  grid-default-color grid-2">
          <div
            ref={grid2Container}
            className=" flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Health Is Wealth
            </p>
            <Card
              text="Healthy"
              containerRef={grid2Container}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Strong"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Fit"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Nutrition"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image={"assets/logos/csharp-pink.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={"assets/logos/dotnet-pink.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image={"assets/logos/blazor-pink.png"}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* grid3 */}
        <div className="  grid-black-color grid-3">
          <p className="headtext">Our Mission</p>
          <p className="text-neutral-400 subtext z-10">
            We are a team of fitness enthusiasts <br /> dedicated to helping you
            achieve <br /> your fitness goals.
          </p>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
          </figure>
        </div>
        {/* grid4 */}
        <div className="  grid-special-color grid-4">
            <div className="flex-col flex items-center justify-center gap-4 size-full"> 
                <p className="text-center headtext">
                    Do you want to join us?
                </p>
                <Copy/>
            </div>
        </div>
        {/* grid5 */}
        <div className="  grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">Fitness</p>
                <p className="subtext">
                    We are a team of fitness enthusiasts dedicated to helping you achieve your fitness goals. Our mission is to provide you with the best fitness experience possible
                </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 ">
                <Framework />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
