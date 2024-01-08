import { HTMLAttributes, ImgHTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
};

const ComponentComponent = ({ children }: Props) => {
  return <div>{children}</div>;
};
ComponentComponent.Image = Image;
ComponentComponent.Title = Title;
ComponentComponent.Price = Price;
ComponentComponent.Button = Button;
export default ComponentComponent;

function Image({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={`${className}`} {...props} />;
}
function Title({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`${className}`}>{children}</div>;
}
function Price({ className, children }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`${className}`}>{children}</p>;
}
function Button({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
