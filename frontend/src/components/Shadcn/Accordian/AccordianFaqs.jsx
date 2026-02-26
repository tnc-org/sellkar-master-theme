import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/Shadcn/Accordian/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus } from "lucide-react";

const items = [
  {
    title: "Is this component fully accessible for all users?",
    content:
      "Yes. It strictly follows the WAI-ARIA design pattern, ensuring proper keyboard navigation, screen reader compatibility, and an inclusive experience for all users.",
  },
  {
    title: "Does this component come with built-in styling by default?",
    content:
      "Yes. It includes clean, modern default styles that visually align with other UI components, allowing you to use it immediately without extra styling work.",
  },
  {
    title: "Are animations enabled by default, and can they be disabled?",
    content:
      "Yes. Smooth animations are enabled by default to improve user experience, but you can easily turn them off if you prefer a simpler or more static interaction.",
  },
  {
    title: "How much can I customize this component to match my brand?",
    content:
      "You can fully customize colors, spacing, typography, icons, and layout using Tailwind CSS or custom styles to perfectly match your brand identity.",
  },
  {
    title: "Will this component work properly on mobile and tablet devices?",
    content:
      "Yes. The component is fully responsive and has been tested on mobile phones, tablets, and desktop screens to ensure a consistent experience everywhere.",
  },
  {
    title: "Is this component easy to integrate into existing projects?",
    content:
      "Absolutely. It is designed to be plug-and-play, making integration into existing React or Next.js projects quick and hassle-free.",
  },
  {
    title: "Can this component be safely used in production environments?",
    content:
      "Yes. The component is production-ready, well-tested, and suitable for real-world applications including commercial and client-facing projects.",
  },
];



export default function AccordianFaqs() {
  return (
    <div className="flex justify-center items-center">

    <Accordion
      defaultValue="item-0"
      type="single"
      collapsible
      className="my-4 ">
      {items.map(({ title, content }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionPrimitive.Header className="flex text-lg">
            <AccordionPrimitive.Trigger
              className="flex flex-1 items-center text-gray-600 justify-between py-7 font-medium transition-all cursor-pointer [&[data-state=open]>svg]:rotate-45 text-md">
              {title}
              <Plus
                className="h-5 w-5 shrink-0   text-muted-foreground transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header >
          <AccordionContent className={"text-gray-600 text-sm"}>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  );
}
