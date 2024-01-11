import "./index.css";
import CompoundWrapper from "./components/Compound-Component/CompoundWrapper";
import User from "./components/Hoc/User";
import WithLoading from "./components/Hoc/WithLoading";
import Navbar from "./components/Render-Prop/Navbar";
import Tooltip from "./components/Render-Prop/Tooltip";
const UserWithLoading = WithLoading(User);
const App = () => {
  const renderTooltipContent = (isVisible: boolean, text: string) => {
    return isVisible && <div>{text}</div>;
  };
  const list = [
    "Home",
    "About",
    "Contact",
    "Dashbord",
    "Pricing",
    "Help",
    "Resource",
    "Social Media",
  ];
  const renderNavbarList = (Visible: boolean, list: string[]) => {
    return Visible ? (
      <div className="w-full h-[300px] p-4 rounded-xl flex flex-wrap gap-16 justify-between absolute top-20 left-0 bg-[#1d2023] text-white">
        {list.map((el) => (
          <p className="font-normal  text-base">{el}</p>
        ))}
      </div>
    ) : null;
  };
  return (
    <div className="w-full p-4 mx-auto flex flex-col gap-20">
      <Navbar list={list} renderNavbarList={renderNavbarList} />
      <div className="flex">
        <div className="flex flex-col gap-10">
          <p className="topic-title">Compound Component</p>
          <CompoundWrapper />
        </div>
      </div>
      <div className="HOC">
        <p className="topic-title">Higher Order Component</p>
        <UserWithLoading
          key={null}
          children={undefined}
          type={""}
          props={undefined}
        />
      </div>
      <Tooltip
        text="This is a tooltip"
        renderTooltipContent={renderTooltipContent}
      >
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
