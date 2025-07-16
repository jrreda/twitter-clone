import LeftBar from "@/components/layout/LeftBar";
import "./globals.css";
import RightBar from "@/components/layout/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between max-w-screen-md mx-auto lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="h-screen px-2 xsm:px-4 xxl:px-8"><LeftBar /></div>
          <div className="h-screen lg:min-w-[600px] border-x-[1px] border-borderGray flex-1">{children}</div>
          <div className="hidden h-screen ml-4 md-ml-8 xl:flex flex-1"><RightBar /></div>
        </div>
      </body>
    </html>
  );
}
