import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Property Pulse | Find the perfect rental',
  description: 'Find your dream rental property, house',
  keywords: 'rentals, find rentals, find properties, find houses',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
