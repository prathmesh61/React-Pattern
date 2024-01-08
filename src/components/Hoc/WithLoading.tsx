import { ReactPortal, useState } from "react";

const WithLoading = (WrappedComponent: React.FC) => {
  return (props: ReactPortal) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return (
      <div>
        {loading ? <p>Hoc Loading...</p> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default WithLoading;
