import {
  CatalogIcon,
  CommunticationIcon,
  DashboardIcon,
  MarketingIcon,
  PrivacyPoliceIcon,
  SIPsIcon,
  SettingsIcon,
  TermConditionIcon,
  TransactionIcon,
  UserIcon,
} from "./Icons";

export const sideBarData = [
  {
    icon: <DashboardIcon />,
    tabs: "Dashboard",
    path: "/admin/dashboard",
  },

  {
    icon: <UserIcon />,
    tabs: "Users",
    path: "/admin/users",
  },
  {
    icon: <SIPsIcon />,
    tabs: "Leaderboard",
    path: "/admin/spis",
  },
  {
    icon: <MarketingIcon />,
    tabs: "Marketing",
    hasDropdown: true,
    subItems: [
      {
        tabs: "Campaigns",
        path: "/admin/marketing/campaigns",
      },
      {
        tabs: "SEO",
        path: "/admin/marketing/seo",
      },
    ],
  },
  {
    icon: <CommunticationIcon />,
    tabs: "Communications",
    path: "/communications",
  },
  {
    icon: <TransactionIcon />,
    tabs: "Notifications",
    path: "/admin/notifications",
  },
  {
    icon: <CatalogIcon />,
    tabs: "Upgrade",
    path: "/admin/membership",
  },
  {
    icon: <SettingsIcon />,
    tabs: "Settings",
    path: "/admin/settings",
  },
];

export const recentTranjections = [
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "john doe",
    amount: "₹ 2,300.00",
  },
  {
    name: "morin",
    amount: "₹ 2,300.00",
  },
];

export const tableData = [
  {
    id: 1,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 2,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
  {
    id: 3,
    name: "John Leo",
    registration: "01-01-2023",
    cityState: "Hisar / Haryana",
    memberStatus: "Active",
    totalInvestment: "₹ 5000",
  },
];

export const addNewUserData = [
  {
    label: "First Name",
    placeholder: "Enter First Name",
    name: "first_name",
  },
  {
    label: "last Name",
    placeholder: "Enter last Name",
    name: "last_name",
  },
  {
    label: "e-mail",
    placeholder: "enter mail",
    name: "email",
  },
  {
    label: "phone number ",
    placeholder: "Enter phone number ",
    name: "phone_no",
  },
  {
    label: "city",
    placeholder: "Enter city",
    name: "city",
  },
  {
    label: "state",
    placeholder: "Enter state",
    name: "state",
  },
];

// USERS LIST

export const userList = [
  {
    id: 1,
    name: "John Doe",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    online: false,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

export const billingHistory = [
  {
    plan: "Starter Plan - Jan 2024",
    amount: "$10.00",
    purchase: "2024-01-01",
    end: "2024-01-31",
    status: "Processing",
  },
  {
    plan: "Growth Plan - May 2024",
    amount: "$79.00",
    purchase: "2024-05-01",
    end: "2024-05-31",
    status: "Success",
  },
  {
    plan: "Starter Plan - Apr 2024",
    amount: "$10.00",
    purchase: "2024-04-01",
    end: "2024-04-30",
    status: "Success",
  },
];
