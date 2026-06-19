import { Inter, Calistoga, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/app/(admin)/lead-generation/_components/ui/sonner";
import "./lead-gen.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const calistoga = Calistoga({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export default function LeadGenLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${inter.variable} ${calistoga.variable} ${jetbrainsMono.variable} h-full antialiased lead-gen-theme`}>
      <div className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}
