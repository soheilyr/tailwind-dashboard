import { isRTL } from "@/lib/config/direction";

export const getDirectionalValue = <T>(ltrValue: T, rtlValue: T): T => {
  return isRTL() ? rtlValue : ltrValue;
};

export const getDirectionalClass = (
  ltrClass: string,
  rtlClass: string
): string => {
  return isRTL() ? rtlClass : ltrClass;
};

export const getDirectionalStyle = (
  ltrStyle: React.CSSProperties,
  rtlStyle: React.CSSProperties
): React.CSSProperties => {
  return isRTL() ? rtlStyle : ltrStyle;
};

// Common directional values
export const directionalValues = {
  start: getDirectionalValue("left", "right"),
  end: getDirectionalValue("right", "left"),
  marginStart: getDirectionalValue("marginLeft", "marginRight"),
  marginEnd: getDirectionalValue("marginRight", "marginLeft"),
  paddingStart: getDirectionalValue("paddingLeft", "paddingRight"),
  paddingEnd: getDirectionalValue("paddingRight", "paddingLeft"),
  borderStart: getDirectionalValue("borderLeft", "borderRight"),
  borderEnd: getDirectionalValue("borderRight", "borderLeft"),
  borderRadiusStart: getDirectionalValue(
    "borderTopLeftRadius",
    "borderTopRightRadius"
  ),
  borderRadiusEnd: getDirectionalValue(
    "borderTopRightRadius",
    "borderTopLeftRadius"
  ),
};
