import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us on</h2>
      <div>
        <div className="join join-vertical">
          <button className="btn join-item bg-base-100 w-full justify-start"><FaFacebook/> Facebook</button>
          <button className="btn join-item bg-base-100 w-full justify-start"><FaTwitter/> Twitter</button>
          <button className="btn join-item bg-base-100 w-full justify-start"><FaInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
