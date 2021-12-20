import React from "react";

import { BlockProps } from "../../../../../utils/typescript-utils";
import View from "./BlockThankYouView";

export type BlockThankYouProps = unknown;

export const blockThankYou: BlockProps = {
  id: "blockThankYou",
  name: "Thank You",
  viewComponent: View,
  editComponent: View,
  IconComponent: <div>Icon</div>,
  description: "Thank you page",
  blockVariationToolbarDefaultOption: "",
  blockVariationToolbarOptions: [],
  tags: [""],
};
