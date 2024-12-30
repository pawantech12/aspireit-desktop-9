import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-10 py-24 bg-gradient-to-b from-[#0B002B] to-[#1A0255] h-full relative">
        <div
          style={{
            background: "#DF5B5B",
            borderRadius: 16,
          }}
          className="w-[306px] p-4 relative"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              color: "black",
              fontSize: 12,

              wordWrap: "break-word",
            }}
          >
            Work Experience
          </div>
          <div
            style={{
              color: "black",
              fontSize: 18,

              wordWrap: "break-word",
            }}
          >
            UX Designer intern - Walmart
          </div>
          <div
            style={{
              color: "black",
              fontSize: 10,

              wordWrap: "break-word",
            }}
            className="mt-4"
          >
            Embarking on an internship in UI/UX design is an exciting journey!
            You'll dive into user research, create stunning wireframes, and
            collaborate with talented teams to bring ideas to life. It's the
            perfect way to sharpen your skills and make a real impact!
          </div>
          <img
            src="./vector.png"
            alt="flage image"
            className="absolute -top-20 -left-5"
          />
        </div>

        <div className="flex ms-[31rem] mt-[-2rem]">
          <div className="relative h-full rounded-full">
            <img
              src="./circle.png"
              alt="circle png"
              className="w-full h-full"
            />
            <span className="font-semibold text-base text-white absolute top-16 left-12">
              AI Interview
            </span>
            <div className="flex items-center gap-2 absolute top-28 left-3">
              <img
                src="./brown-star.png"
                alt="brown star"
                className="w-12 h-12"
              />
              <img
                src="./bronze.png"
                alt="brown star"
                className="w-12 h-12 mt-[2.5rem]"
              />
              <img
                src="./brown-star.png"
                alt="brown star"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[-3rem]">
          <div
            style={{
              background: "rgba(217, 217, 217, 0.39)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 16,
              border: "1px white solid",
              backdropFilter: "blur(30px)",
            }}
            className="p-4 w-fit"
          >
            <figure className="relative">
              <img src="./card-cover.png" alt="card cover image" />
              <img
                src="./play-btn.png"
                alt="play button image"
                className="absolute top-10 left-28"
              />
            </figure>
            <div className="my-2 flex justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <img src="./red-dot.png" alt="red dot png" />
                  <img src="./red-dot.png" alt="red dot png" />
                  <img src="./red-dot.png" alt="red dot png" />
                </div>
                <span className="text-[10px] text-white">
                  3 weaknesses addressed
                </span>
              </div>
              <div className="bg-gradient-gold w-1/2 flex flex-col justify-center items-center -mt-8 relative z-10">
                <h4 className="font-bold text-4xl text-[#161616]">+35</h4>
                <span className="text-xs text-white">
                  Skill Stack score earnt
                </span>
              </div>
            </div>
            <div className="mt-5">
              <span className="text-xs text-[#5BB0FF] font-medium">
                Bussiness
              </span>
              <h4 className="text-base font-bold text-white">
                Digital Marketing Course
              </h4>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-white">3 Lessons . 72 hrs</span>
              <Link className="text-base text-white underline underline-offset-4">
                Overview
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-20 mt-[7rem] ms-[-5rem]">
          <div className="relative h-full rounded-full">
            <img
              src="./circle.png"
              alt="circle png"
              className="w-full h-full"
            />
            <span className="font-semibold text-base text-white absolute top-16 left-12">
              AI Interview
            </span>
            <div className="flex items-center gap-2 absolute top-28 left-3">
              <img src="./gold.png" alt="gold star" className="w-12 h-12" />
              <img
                src="./gold.png"
                alt="gold star"
                className="w-12 h-12 mt-[2.5rem]"
              />
              <img src="./gold.png" alt="gold star" className="w-12 h-12" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: 16,
          }}
          className="w-[306px] p-4 relative bg-white shadow-[4px_6px_4px_0px_#FFA7A3] mt-[6rem]"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              color: "black",
              fontSize: 12,

              wordWrap: "break-word",
            }}
          >
            Work Experience
          </div>
          <div
            style={{
              color: "black",
              fontSize: 18,

              wordWrap: "break-word",
            }}
          >
            UX Designer intern - Walmart
          </div>
          <div
            style={{
              color: "black",
              fontSize: 10,

              wordWrap: "break-word",
            }}
            className="mt-4"
          >
            Embarking on an internship in UI/UX design is an exciting journey!
            You'll dive into user research, create stunning wireframes, and
            collaborate with talented teams to bring ideas to life. It's the
            perfect way to sharpen your skills and make a real impact!
          </div>
          <img
            src="./location.png"
            alt="location image"
            className="absolute -top-16 -right-4"
          />
        </div>
        <div className="my-20 flex justify-end">
          <div className="flex gap-5 items-center">
            <figure className="w-[180px] h-[180px]">
              <img
                src="./big-jupiter.png"
                alt="jupiter image"
                className="w-full h-full"
              />
            </figure>
            <div className="relative p-4 w-fit">
              <img src="./rectangle.png" alt="rectangle png image" />
              <p className="text-base absolute px-4 top-20 left-14">
                Amidst the lively market, aromas of spices fill the air.
                Laughter and chatter blend together, creating a symphony of
                life.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./star.png"
          alt="star image"
          className="absolute -top-5 left-80"
        />
        <img
          src="./ellipse.png"
          alt="circle image"
          className="absolute top-40 left-1/2 w-3 h-3"
        />
        <img
          src="./ellipse.png"
          alt="circle image"
          className="absolute -top-1 right-80 w-5 h-5"
        />
        <img
          src="./ellipse.png"
          alt="circle image"
          className="absolute top-10 right-10 w-3 h-3"
        />
        <img
          src="./star.png"
          alt="star image"
          className="absolute top-[40rem] left-60 "
        />
        <img
          src="./star.png"
          alt="star image"
          className="absolute top-[20rem] -left-5 w-10 h-10 "
        />
        <img
          src="./ellipse.png"
          alt="ellipse image"
          className="absolute bottom-[10rem] left-0 w-3 h-3 "
        />
        <img
          src="./ellipse.png"
          alt="ellipse image"
          className="absolute bottom-[5rem] right-0 w-5 h-5 "
        />
        <img
          src="./ellipse.png"
          alt="ellipse image"
          className="absolute bottom-[35rem] right-40 w-3 h-3 "
        />
        <img
          src="./star.png"
          alt="star image"
          className="absolute -bottom-5 left-40  w-10 h-10 "
        />
        <img
          src="./dotted-line.png"
          alt="dotted connecting line"
          className="absolute top-32 left-[72px]"
        />
      </main>
    </>
  );
}

export default App;
