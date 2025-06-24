import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";

export const metadata = {
  title: "Clockwise",
  description: "Meeting Scheduling App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`inter.className`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 t-white">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto text-center px-4 text-gray-600">
              <p>Made with ❤ by Mizan Ali Khan</p>
            </div>
          </footer>
          {/* Create Event Drawer */}
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
