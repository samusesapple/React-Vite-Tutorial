import { IconType } from "react-icons";
import { HiHome, HiMagnifyingGlass, HiPlus, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2";

export interface Menu {
  name: string;
  icon: IconType;
}

// menu items
export const menus: Menu[] = [
  { name: "Home", icon: HiHome },
  { name: "Search", icon: HiMagnifyingGlass },
  { name: "Watchlist", icon: HiPlus },
  { name: "Originals", icon: HiStar },
  { name: "Movies", icon: HiPlayCircle },
  { name: "Series", icon: HiTv },
];