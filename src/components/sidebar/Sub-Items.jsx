import { useMemo } from "react";
import { useLocation,useNavigate } from "react-router-dom";


const SubMenuItem = ({ item }) => {
  const { name, path } = item;
  
  const router = useNavigate();
  const pathname = useLocation();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer ${
        isActive ? "text-sidebar-active font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItem;