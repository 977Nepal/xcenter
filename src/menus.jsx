import {
    LayoutDashboard,
    BadgeDollarSign,
    CircleUserRound,
    Settings,
    WalletCards,
  } from "lucide-react";


export const items = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Transaction",
      path: "/transaction",
      icon: BadgeDollarSign,
    },
    {
      name: "Payment",
      path: "/payment",
      icon: WalletCards,
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: CircleUserRound,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
      items: [
        {
          name: "General",
          path: "/settings",
        },
        {
          name: "Security",
          path: "/settings/security",
        },
        {
          name: "Notifications",
          path: "/settings/notifications",
        },
      ],
    },
  ];