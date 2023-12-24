interface MainChildren {
  children: React.ReactNode;
}

const Main = ({ children }: MainChildren) => {
  return <main>{children}</main>;
};

export default Main;
