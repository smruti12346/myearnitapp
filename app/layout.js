"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/custom-animated.css";
import "@/assets/css/default.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/magnific-popup.css";
// import "@/assets/css/magnific.dark.css";
// import "@/assets/css/magnific.rtl.css";
import "@/assets/css/main.css";
import "@/assets/css/style.css";
import dynamic from "next/dynamic";
import useToggle from "@/Hooks/useToggle";
const HeaderHomeThree = dynamic(() =>
  import("@/components/HomeThree/HeaderHomeThree")
);
const FooterHomeThree = dynamic(() =>
  import("@/components/HomeThree/FooterHomeThree")
);
const BackToTop = dynamic(() => import("@/components/BackToTop"));
const Drawer = dynamic(() => import("@/components/Mobile/Drawer"));
const ProjectHomeThree = dynamic(() =>
  import("@/components/HomeThree/ProjectHomeThree")
);
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "EarnIt! | Kid's Chores and Family App",
//   description: "EarnIt! | Kid's Chores and Family App",
// };

export default function RootLayout({ children }) {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <html lang="en">
      <head>
        <title>Get Started With EarnIt!</title>
      </head>
      <body className={inter.className}>
        <Drawer
          drawer={drawer}
          action={drawerAction.toggle}
        />
        <HeaderHomeThree action={drawerAction.toggle} />

        {children}
        <ProjectHomeThree />
        <FooterHomeThree />
        <BackToTop className="back-to-top-3" />
      </body>
    </html>
  );
}
