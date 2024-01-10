import ComponentComponent from "./ComponentComponent";
import mac from "../../assets/mac.jpg";

const CompoundWrapper = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <ComponentComponent.Image src={mac} className="image" />
        <ComponentComponent.Title className="title">
          MackBook Pro
        </ComponentComponent.Title>
        <ComponentComponent.Price className="price">
          Price:- $499
        </ComponentComponent.Price>
        <ComponentComponent.Button className="button">
          Add to cart
        </ComponentComponent.Button>
      </div>
      <div className="card">
        <ComponentComponent.Title className="title">
          MackBook Pro
        </ComponentComponent.Title>
        <ComponentComponent.Price className="price">
          Price:- $499
        </ComponentComponent.Price>
        <ComponentComponent.Image src={mac} className="image" />
        <ComponentComponent.Button className="button">
          Add to cart
        </ComponentComponent.Button>
      </div>
    </div>
  );
};

export default CompoundWrapper;
