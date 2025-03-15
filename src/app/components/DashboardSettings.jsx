"use client";

import { useState } from "react";
import Image from "next/image";

const DashboardSettings = () => {
  const [theme, setTheme] = useState("#FF5C23");
  const [appIcon, setAppIcon] = useState(null);
  const [showAds, setShowAds] = useState(false);
  const [ads, setAds] = useState([]);

  const handleThemeChange = (color) => setTheme(color);
  const handleAppIconChange = (e) => setAppIcon(e.target.files[0]);
  const removeAppIcon = () => setAppIcon(null);

  const createAd = () => {
    const newAd = {
      id: ads.length + 1,
      title: "New Ad",
      description: "Special Offer",
      image: "/burger.png",
    };
    setAds([...ads, newAd]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Settings
        </h1>

        {/* Avatar Upload Section */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-lg">Avatar</label>
          <p className="text-sm text-gray-600 mb-3">
            Choose an image that best reflects your identity or brand.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {appIcon ? (
                <Image
                  src={URL.createObjectURL(appIcon)}
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              ) : (
                <span className="text-gray-500">👤</span>
              )}
            </div>
            <div className="flex gap-2">
              <label className="bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-600">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAppIconChange}
                  className="hidden"
                />
              </label>
              {appIcon && (
                <button
                  onClick={removeAppIcon}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                >
                  🗑
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-lg">Theme</label>
          <div className="flex gap-2">
            {["#FF5C23", "#7D57FF", "#5865F2", "#EA4C89", "#16A085"].map(
              (color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${
                    theme === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleThemeChange(color)}
                />
              )
            )}
          </div>
        </div>

        {/* Show Ads Button */}
        <button
          onClick={() => setShowAds(!showAds)}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-blue-600 transition-all"
        >
          {showAds ? "Hide Ads" : "Show Ads"}
        </button>
      </div>

      {/* Ads Section */}
      {showAds && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Ads</h2>
            <button
              onClick={createAd}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              + Create Ad
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
              >
                <img src={ad.image} alt="Ad" className="w-24 h-24 mb-2" />
                <h3 className="font-bold text-lg">{ad.title}</h3>
                <p className="text-gray-600">{ad.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSettings;
