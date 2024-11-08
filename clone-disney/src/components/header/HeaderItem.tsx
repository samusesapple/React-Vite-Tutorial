interface HeaderItemProps {
  title: string;
  icon: (props: { className: string }) => React.ReactNode;
  onClick: () => void;
} 

export default function HeaderItem({ title, icon, onClick }: HeaderItemProps) {
  const iconImage = icon({
    className: "size-4"
  }); 

  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-4 decoration-2 mb-2"
      onClick={onClick}
    >
      {iconImage}
      <h2 className="">
        {title.toUpperCase()}
      </h2>
    </div>
  );
}

