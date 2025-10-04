"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavMain from "@/components/custom/Mobilemenuitems/Mobilemenuitems";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Navigation",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Home Page",
          url: "/",
        },
        {
          title: "Portfolio",
          url: "/portfolio",
        },
        {
          title: "Contact",
          url: "/contact-us",
        },
        {
          title: "New Quote",
          url: "/new-quote",
        },
      ],
    },
  ],
};

export default function SheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Jai Maa Kaali Trading Co.</SheetTitle>
          <SheetDescription>
            We craft bold, refined brands through cutting-edge design, digital
            strategy, and flawless execution.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <NavMain setOpen={setOpen} items={data.navMain} />
        </div>
        <SheetFooter>
          <Link
            href="mailto:contact@mediaxinfinity.com?subject=Contacting%20from%20MXI%20website&body=Hi%20Aakash%2C%0A%0AI%E2%80%99d%20like%20to%20learn%20more%20about%20the%20services%20your%20agency%20offers.%0A%0ALet%E2%80%99s%20get%20in%20touch.%0A%0AThanks!
"
          >
            <Button variant="outline" className="mb-0 w-full">
              Mail Us
            </Button>
          </Link>
          <Link href="tel:+917984375115">
            <Button variant="outline" className="mb-4 w-full">
              Call Us
            </Button>
          </Link>
          <SheetClose asChild>
            <Button variant="outline" className="dark:text-gray-400">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
