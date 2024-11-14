import { ReactNode } from "react";
import '@/assets/styles/global.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type RootLayoutProps = {
    children: ReactNode;
}

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property',
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (<html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html>);
}

export default RootLayout;