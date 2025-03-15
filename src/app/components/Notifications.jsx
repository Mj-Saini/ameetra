import React from "react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-2.5">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Notifications Section */}
          <div className="col-span-2 bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">New Updates</h3>
            <div className="space-y-4">
              {/* Notification Item */}
              <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">New Match Found</h4>
                  <p className="text-sm text-gray-600">on Date - 3600</p>
                  <p className="text-gray-700">
                    Exciting news! Let's chat soon
                  </p>
                  <div className="mt-2 flex space-x-4 text-sm text-blue-500">
                    <button>Send</button>
                    <button>Respond</button>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">1 hour ago</span>
              </div>

              {/* Another Notification */}
              <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">New Message Received</h4>
                  <p className="text-sm text-gray-600">on Date - 3600</p>
                  <p className="text-gray-700">Can't wait to talk more! 😍</p>
                  <div className="mt-2 flex space-x-4 text-sm text-blue-500">
                    <button>Like</button>
                    <button>Reply</button>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">1 hour ago</span>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Filter Options</h3>
            <div className="space-y-2">
              {[
                "Comments",
                "Likes",
                "Reviews",
                "Mentions",
                "Purchases",
                "Messages",
              ].map((filter) => (
                <div key={filter} className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <label>{filter} Filter</label>
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                Select All
              </button>
              <button className="bg-gray-300 px-4 py-2 rounded-lg">
                Unselect All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
