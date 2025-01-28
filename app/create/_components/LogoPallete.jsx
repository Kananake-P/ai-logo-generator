import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoPallet({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.pallette);

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((pallette, index) => (
          <div
            className={`flex p-1 cursor-pointer ${
              selectedOption == pallette.name &&
              "border-2 rounded-lg border-primary"
            }`}
            key={index}
          >
            {pallette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedOption(pallette.name);
                  onHandleInputChange(pallette.name);
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPallet;
