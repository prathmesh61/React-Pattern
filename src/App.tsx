import "./App.css";
import CompoundWrapper from "./components/CompoundComponent/CompoundWrapper";
import User from "./components/Hoc/User";
import WithLoading from "./components/Hoc/WithLoading";
const UserWithLoading = WithLoading(User);
const App = () => {
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
    </div>
  );
};

export default App;
