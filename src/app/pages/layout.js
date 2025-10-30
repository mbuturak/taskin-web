import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";

export const metadata = {
  title: "Task-In Services",
  description: "Task-In Services",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/main-assets/image/favicon.svg" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/main-assets/image/favicon.svg" },
    ],
    shortcut: [
      { rel: "shortcut icon", url: "/main-assets/image/favicon.svg" },
    ],
  },
};


export default function PagesRootLayout({ children }) {
  return children
}

