import Link from "next/link";
import React from "react";

const CommonBtn = ({ btnName, btnStyling }) => {
  return (
    <>
      <Link
        href={"/"}
        className={`ext-white font-inter font-medium px-5 py-2.5 rounded-full border border-parimary_clr duration-300 capitalize ${btnStyling}`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default CommonBtn;
