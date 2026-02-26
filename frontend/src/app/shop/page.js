"use client";

import { ShopSectionMap } from "@/lib/MapsSection/ShopSectionMap";
import { useTheme } from "@/provider/theme-provider";

export default function ShopPage() {
  const {theme, themeId} = useTheme();
  const shopSections = theme.shop || [];

  return (
    <>
      {shopSections.map((item, index) => {
        const VariantMap = ShopSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}
