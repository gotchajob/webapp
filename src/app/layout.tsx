import SnackbarProvider from "@/components/snackbar-provider";
import ThemeRegistry from "@/components/theme-registry/theme-registry";
import { cookies } from "next/headers";
import { getAccessTime, setAccessTime } from "@/package/cookies/token";
import { formatDate } from "@/package/util";
import { UpdateAccess } from "@/package/api/access";
import { UpdateAccessServer } from "./_components/update-access";

export const metadata = {
  title: "Gotcha Job",
  description:
    "Nền tảng website & app cung cấp các dịch vụ cải thiện kỹ năng người dùng trong quá trình họ tham gia ứng tuyển công việc",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessTime = await getAccessTime(cookies());
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/favicon.ico"
        />
      </head>
      <body
        style={{
          overflowX: "hidden",
        }}
      >
        <UpdateAccessServer accessTime={accessTime} />
        <ThemeRegistry>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
