import { ReactNode } from "react";
import '@/assets/styles/global.css';

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
            <main>
                {children}
            </main>
        </body>
    </html>);
}

export default RootLayout;