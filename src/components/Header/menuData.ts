import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 6,
    title: "دسته بندی ها",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 1,
    title: "فروشگاه",
    newTab: false,
    path: "/shop",
  },
  {
    id: 2,
    title: "سوالات متداول",
    newTab: false,
    path: "/questions",
  },
  {
    id: 3,
    title: "وبلاگ",
    newTab: false,
    path: "/blog",
  }
];
