import { Menu } from "./type";

interface HeaderItemProps {
  item: Menu;
  onClick: () => void;
} 

export default function HeaderItem({ item, onClick }: HeaderItemProps) {
  const icon = item.icon({
    className: "size-4"
  });

  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-4 decoration-2"
      onClick={onClick}
    >
      {icon}
      <h2 className="hidden md:block"
      >{item.name.toUpperCase()}
      </h2>
    </div>
  );
}

