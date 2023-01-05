
import { PropsWithChildren } from "react";


const Layout: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className="w-full">
      <div className="container mx-auto pt-4">{children}</div>
    </div>
  );
};

export default Layout;
