import {
  faChartSimple,
  faUser,
  faCircleHalfStroke,
  faEnvelopeOpenText,
  faHouse,
  faUsers,
  faChartColumn,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

export const cardData = [
  {
    title: "Sales Report",
    total: "$150,000",
    content: "Total sales",
    icon: faChartSimple,
  },
  {
    title: "New Users",
    total: 350,
    content: "New sign-ups",
    icon: faUser,
  },
  {
    title: "Product Inventory",
    total: 1200,
    content: "Total items",
    icon: faCircleHalfStroke,
  },
  {
    title: "Customer Feedback",
    total: 0,
    content: "Average rating",
    icon: faEnvelopeOpenText,
  },
];

export const sidebarData = [
  {
    menu_name: "Home",
    menu_icon: faHouse,
    child_menus: [
      {
        menu_name: "Dashboard",
        menu_icon: faTachometerAlt,
        link: "/",
      },
    ],
  },
  {
    menu_name: "Users",
    menu_icon: faUsers,
    child_menus: [
      {
        menu_name: "Users",
        menu_icon: faUsers,
        child_menus: [
          {
            menu_name: "Users List",
            link: "/users",
          },
          {
            menu_name: "Create User",
            link: "/users/create",
          },
        ],
      },
      {
        menu_name: "Roles",
        menu_icon: faChartColumn,
        child_menus: [
          {
            menu_name: "Roles List",
          },
          {
            menu_name: "Add Role",
          },
        ],
      },
    ],
  },
];
