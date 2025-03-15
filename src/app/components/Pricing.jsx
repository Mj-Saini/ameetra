import { billingHistory } from "@/app/components/common/Helper";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <div>
          <button className="px-4 py-2 mr-2 bg-gray-200 rounded">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2">
        {[
          "Account",
          "Team Management",
          "Preferences",
          "Integration",
          "Billing & Subscription",
          "Security",
        ].map((tab, i) => (
          <span
            key={i}
            className={`cursor-pointer pb-2 ${
              tab === "Billing & Subscription"
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Subscription Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Billing & Subscription</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Starter Plan</h3>
            <p className="text-3xl font-bold mt-2">
              $10.00 <span className="text-sm">/month</span>
            </p>
            <button className="mt-4 px-4 py-2 w-full bg-gray-200 rounded">
              Current Plan
            </button>
          </div>

          {/* Growth Plan */}
          <div className="p-6 bg-gray-900 text-white shadow rounded-lg relative">
            <span className="absolute top-3 right-3 bg-orange-500 text-xs px-2 py-1 rounded">
              Best
            </span>
            <h3 className="text-lg font-semibold">Growth Plan</h3>
            <p className="text-3xl font-bold mt-2">
              $79.00 <span className="text-sm">/month</span>
            </p>
            <button className="mt-4 px-4 py-2 w-full bg-blue-600 rounded">
              Upgrade Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Enterprise Plan</h3>
            <p className="text-3xl font-bold mt-2">
              Custom <span className="text-sm">/month</span>
            </p>
            <button className="mt-4 px-4 py-2 w-full bg-gray-200 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Billing History</h2>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded w-1/3"
            />
            <div>
              <button className="px-3 py-2 bg-gray-200 rounded mr-2">
                Filter
              </button>
              <button className="px-3 py-2 bg-gray-200 rounded">Export</button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Plan Name</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Purchase Date</th>
                <th className="p-3">End Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{item.plan}</td>
                  <td className="p-3">{item.amount}</td>
                  <td className="p-3">{item.purchase}</td>
                  <td className="p-3">{item.end}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded ${
                        item.status === "Success"
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
