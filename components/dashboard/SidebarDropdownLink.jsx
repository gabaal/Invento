import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BaggageClaim } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropdownLink({ title, items, icon: Icon }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center space-x-2 p-2">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, i) => (
          <CollapsibleLink key={item.i} href={item.href} title={item.title} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
