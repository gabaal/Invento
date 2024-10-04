import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users2,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-slate-100 h-12 flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex gap-3">
        {/* Recent Activities */}
        <button>
          <History className="w-6 h-6 " />
        </button>
        {/* Search */}
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon */}
        <div className="pr-2 border-r border-gray-300">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="p-1 rounded-lg bg-blue-600">
                  <Plus className=" text-slate-50 w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library...</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* 3 Icons */}
        <div className="flex border-r border-gray-300 space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="p-1 rounded-lg hover:bg-slate-300">
                  <Users2 className=" text-slate-900 w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refer and Earn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="p-1 rounded-lg hover:bg-slate-300">
                  <Bell className=" text-slate-900 w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="p-1 rounded-lg hover:bg-slate-300">
                  <Settings className=" text-slate-900 w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* User Icons */}
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Gerald</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <Image
              alt=""
              src="/avatar.png"
              width={96}
              height={96}
              className="rounded-full w-8 h-8 border border-slate-800"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
