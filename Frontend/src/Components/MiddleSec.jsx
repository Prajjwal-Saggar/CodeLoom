import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "prismjs/themes/prism-okaidia.css";
import Editor from "react-simple-code-editor";
import { RingLoader } from "react-spinners";
import axios from "axios";
import prism from "prismjs";
import Markdown from "react-markdown";

const MiddleSec = () => {
  const [code, setCode] = useState(``);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        prompt: code,
      });
      setResult(response.data);
    } catch (err) {
      console.error("Error:", err);
      setResult("An error occurred while generating the review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="w-full h-[35.5rem] mt-0.5 font-poppins flex gap-4 pt-3 px-3">
      {/* Left Section */}
      <div className="flex flex-col w-[55%]">
        <div className="text-white tracking-wide font-semibold pb-2">
          Code Here <KeyboardDoubleArrowDownIcon className="text-primary" />
        </div>

        <div className="bg-[#0c0707] text-white font-mono rounded-sm h-full overflow-y-auto overflow-x-hidden p-3 scrollbar-thin scrollbar-thumb-[#22ffe8]/40 scrollbar-track-transparent">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            className="outline-none whitespace-pre-wrap"
          />
        </div>

        <button
          onClick={reviewCode}
          className="relative overflow-hidden group bg-primary pt-1 pb-1 pl-2 pr-2 rounded-sm w-[30%] mt-4 cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-105"
        >
          <span className="relative z-10 flex items-center justify-center">
            Generate{" "}
            <AutoAwesomeIcon fontSize="small" className="text-white ml-1" />
          </span>
          <span className="absolute -top-1/2 left-1/2 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-[45%]">
        <div className="text-white tracking-wide font-semibold pb-2">
          Result <Diversity2Icon fontSize="small" className="text-primary ml-1" />
        </div>

        <div className="relative text-white h-full bg-[#1a1818] rounded-sm p-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#22ffe8]/40 scrollbar-track-transparent">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1818]/80 z-10">
              <RingLoader color="#22ffe8" size={80} />
            </div>
          )}

          <Markdown  >{result}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default MiddleSec;
