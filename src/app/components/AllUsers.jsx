import CommonBtn from "@/app/components/common/CommonBtn";
import Image from "next/image";

const AllUsers = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <div className="text-center text-blue-600 font-bold text-xl">
        Leaderboard
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 my-4">
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName=" Streamers"
        />
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName=" Supporters"
        />
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName=" Families"
        />
      </div>

      {/* Time Filters */}
      <div className="flex justify-center space-x-4 mb-4">
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName="  Last 24 Hours"
        />
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName="   Last 7 Days"
        />
        <CommonBtn
          btnStyling="hover:bg-parimary_clr hover:text-white"
          btnName="  All Time"
        />
      </div>

      {/* Leaderboard */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="grid grid-cols-3 text-center gap-4">
          <div className="relative">
            <Image
              src="/user1.png"
              width={80}
              height={80}
              className="rounded-full mx-auto"
              alt="User"
            />
            <p className="text-gray-700 font-bold">Soyzoe</p>
            <p className="text-yellow-500">462,777</p>
          </div>
          <div className="relative">
            <Image
              src="/user2.png"
              width={80}
              height={80}
              className="rounded-full mx-auto border-4 border-yellow-500"
              alt="User"
            />
            <p className="text-gray-700 font-bold">User 2</p>
            <p className="text-yellow-500">1,181,575</p>
          </div>
          <div className="relative">
            <Image
              src="/user3.png"
              width={80}
              height={80}
              className="rounded-full mx-auto"
              alt="User"
            />
            <p className="text-gray-700 font-bold">User 3</p>
            <p className="text-yellow-500">406,060</p>
          </div>
        </div>

        {/* Other Users */}
        <div className="mt-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-b"
            >
              <p className="text-gray-700">
                #{index + 4} User {index + 4}
              </p>
              <p className="text-yellow-500">
                {Math.floor(Math.random() * 500000)}
              </p>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers