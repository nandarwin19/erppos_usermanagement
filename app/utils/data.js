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
            link: "/users/userlist",
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

export const routesData = [
  // { path: "/", label: "Home" },
  { path: "/users/userlist", label: "Users" },
  { path: "/users/create", label: "Create User" },
];

export const userDatas = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    isActive: true,
    role: "Admin",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    isActive: false,
    img: "/images/user_image.jpg",
    role: "User",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    isActive: true,
    role: "Admin",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    isActive: true,
    role: "User",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    email: "daniel.martinez@example.com",
    isActive: false,
    role: "Admin",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "Sophia",
    lastName: "Anderson",
    email: "sophia.anderson@example.com",
    isActive: true,
    role: "User",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "William",
    lastName: "Taylor",
    email: "william.taylor@example.com",
    isActive: false,
    role: "User",
    img: "/images/user_image.jpg",
  },
  {
    firstName: "Olivia",
    lastName: "White",
    email: "olivia.white@example.com",
    isActive: true,
    role: "Admin",
    img: "/images/user_image.jpg",
  },
];
