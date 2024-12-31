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
      icon: <CatalogIcon />,
      tabs: "Catalog",
      hasDropdown: true,
      subItems: [
        {
          tabs: "Campaigns",
          path: "/admin/catalog/campaigns",
        },
        {
          tabs: "SEO",
          path: "/admin/catalog/seo",
        },
      ],
    },
    {
      icon: <UserIcon />,
      tabs: "Users",
      path: "/admin/users",
    },
    {
      icon: <SIPsIcon />,
      tabs: "SIPs",
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
      tabs: "Transactions",
      path: "/transactions",
    },
    {
      icon: <PrivacyPoliceIcon />,
      tabs: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      icon: <TermConditionIcon />,
      tabs: "Terms and Conditions",
      path: "/term-conditions",
    },
    {
      icon: <SettingsIcon />,
      tabs: "Settings",
      hasDropdown: true,
      subItems: [
        {
          tabs: "Profile",
          path: "/settings/profile",
        },
        {
          tabs: "Security",
          path: "/settings/security",
        },
      ],
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
  