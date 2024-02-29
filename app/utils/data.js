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
            link: "/users/rolelist",
          },
          {
            menu_name: "Add Role",
            link: "/users/role",
          },
        ],
      },
    ],
  },
];

export const userDatas = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    isActive: true,
    role: "Admin",
    username: "john_doe",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    isActive: false,
    role: "User",
    username: "jane_doe",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    isActive: true,
    role: "Admin",
    username: "lay23",
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    isActive: true,
    role: "User",
    username: "win_888",
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    email: "daniel.martinez@example.com",
    isActive: false,
    role: "Admin",
    username: "rr_234",
  },
  {
    firstName: "Sophia",
    lastName: "Anderson",
    email: "sophia.anderson@example.com",
    isActive: true,
    role: "User",
    username: "john_doe",
  },
  {
    firstName: "William",
    lastName: "Taylor",
    email: "william.taylor@example.com",
    isActive: false,
    role: "User",
    username: "john_doe",
  },
  {
    firstName: "Olivia",
    lastName: "White",
    email: "olivia.white@example.com",
    isActive: true,
    role: "Admin",
    username: "john_doe",
  },
];

export const RolesListInfos = [
  {
    name: "Administrator",
  },
  {
    name: "Cashier",
  },
  {
    name: "Store Keeper",
  },
  {
    name: "Manager",
  },
  {
    name: "Supervisor",
  },
  {
    name: "Accountant",
  },
  {
    name: "Salesperson",
  },
  {
    name: "Customer Service",
  },
  {
    name: "Delivery Driver",
  },
  {
    name: "Security Guard",
  },
];
