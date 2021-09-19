import { ReactNode } from "react";

export interface RenderPropChildrenProps {
  children: (
    firstArg: { currentText: string; color: string },
    isBold: boolean
  ) => ReactNode;
}

const RenderPropChildren = ({ children }: RenderPropChildrenProps) => {
  return (
    <div className="FancyButton">
      {children({ color: "red", currentText: "TERAZ" }, true)}
    </div>
  );
};

export default RenderPropChildren;
