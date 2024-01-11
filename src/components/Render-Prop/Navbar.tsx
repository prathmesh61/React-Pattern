import { ReactNode, useState } from "react";

type Prop = {
  renderNavbarList: (Visible: boolean, list: string[]) => ReactNode;
  list: string[];
};
const Navbar = ({ list, renderNavbarList }: Prop) => {
  const [Visible, setVisible] = useState(false);

  const mouseEnter = () => {
    setVisible(true);
  };
  const mouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="w-full mx-auto h-full flex justify-between items-center gap-2 relative">
      <p>Renderprop</p>
      <p
        className="cursor-pointer relative font-bold text-xl"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Pages
      </p>
      {renderNavbarList(Visible, list)}
      <button className="border-none rounded-md bg-blue-400 text-white cursor-pointer px-4 py-1">
        Login
      </button>
    </div>
  );
};

export default Navbar;
