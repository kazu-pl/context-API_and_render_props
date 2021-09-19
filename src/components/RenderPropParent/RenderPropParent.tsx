import RenderPropChildren from "components/RenderPropChildren";

const RenderPropParent = () => {
  return (
    <RenderPropChildren>
      {({ color, currentText }, isbold) => (
        <div style={{ fontWeight: isbold ? 700 : 400, color }}>
          {currentText}
        </div>
      )}
    </RenderPropChildren>
  );
};

export default RenderPropParent;
