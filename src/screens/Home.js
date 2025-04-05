import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import ProgressBar from "../components/ProgressBar";
import fitxfearless from "../assets/fitxfearless.png";
import { FileUpload } from "primereact/fileupload";

function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [showPicture, setShowPicture] = useState(true);

  const handleCheckboxClicked = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setShowPicture(true);
    } else {
      setShowPicture(false);
    }
  };

  const onUpload = () => {
    console.log("successfully uploaded file!");
  };
  return (
    <div className="flex flex-col h-screen bg-primary text-font">
      <Header></Header>

      <div className="w-full h-full flex justify-between px-[2vw]">
        <div className="w-[20vw] h-[80vh] bg-accent flex flex-col items-center py-[2vh] space-y-4 rounded-lg">
          <div className="flex justify-start items-center w-[90%] space-x-4">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxClicked}
                  className="sr-only"
                />
                <div
                  className={`box block h-8 w-14 rounded-full ${
                    isChecked ? "bg-secondary" : "bg-button"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                    isChecked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
            {isChecked ? <h>fit mode on</h> : <h>fit mode off</h>}
          </div>
          <FileUpload
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            maxFileSize={1000000}
            onUpload={onUpload}
          />
          <button className="w-[90%] h-[7%] bg-primary text-font rounded-lg">
            Chat
          </button>
          <button className="w-[90%] h-[7%] bg-button text-font rounded-lg">
            Settings
          </button>
        </div>
        <div className="w-[73vw] h-[80vh] bg-accent rounded-lg">
          {!showPicture ? (
            <div className="w-full h-full">
              <img src={fitxfearless} />;
            </div>
          ) : (
            <div className="flex flex-col items-center py-[2vh] px-[2vw] space-y-[5vh] w-[90%] mx-auto">
              <div className="flex flex-col space-y-2 w-full">
                <h className="text-font text-xl">Carbohydrates:</h>
                <ProgressBar percentage="45"></ProgressBar>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <h className="text-font text-xl">Protein:</h>
                <ProgressBar percentage="55"></ProgressBar>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <h className="text-font text-xl">Fat:</h>
                <ProgressBar percentage="5"></ProgressBar>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <h className="text-font text-xl">Test:</h>
                <ProgressBar percentage="120"></ProgressBar>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
