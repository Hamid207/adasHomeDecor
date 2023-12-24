import "../../../assets/Container.css";

interface MainChildren {
  children: React.ReactNode;
}

const Main = ({ children }: MainChildren) => {
  return <main className="container">{children}</main>;
};

export default Main;
