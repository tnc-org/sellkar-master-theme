"use client"
import { ContactSectionMap } from "@/lib/MapsSection/ContactSectionMap";
import { useTheme } from "@/provider/theme-provider";


export default function ContactPage() {
  const {theme, themeId} = useTheme();
  const contactSections = theme.contact || [];

  return (
    <>
      {contactSections.map((item, index) => {
        const VariantMap = ContactSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}