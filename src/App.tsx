import "./App.css";
import CompoundWrapper from "./components/Compound-Component/CompoundWrapper";
import User from "./components/Hoc/User";
import WithLoading from "./components/Hoc/WithLoading";
import Tooltip from "./components/Render-Prop/Tooltip";
const UserWithLoading = WithLoading(User);
const App = () => {
  const renderTooltipContent = (isVisible: boolean, text: string) => {
    return isVisible && <div>{text}</div>;
  };

  return (
    <div className="main">
      <p className="topic-title">Compound Component</p>
      <CompoundWrapper />
      <p className="topic-title">Higher Order Component</p>
      <UserWithLoading
        key={null}
        children={undefined}
        type={""}
        props={undefined}
      />

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
