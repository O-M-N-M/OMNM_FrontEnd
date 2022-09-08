import IcoMoon, { IconProps } from "react-icomoon";

import iconSet from "./selection.json";

export const Icon = (props: IconProps) => (
  <IcoMoon iconSet={iconSet} {...props} />
);
