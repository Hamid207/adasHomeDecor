interface ViewHeight {
  viewHeight: string;
}

const SerachOpacityView = (props: ViewHeight) => {
  return (
    <div
      style={{
        width: "100%",
        height: `${props.viewHeight}`,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "3",
        marginTop: "95px",
      }}
    ></div>
  );
};

export default SerachOpacityView;
