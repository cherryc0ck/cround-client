import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { BellIcon, HamburgerIcon } from "@/assets/icons";
import MyPageSidebar from "@/components/layout/myPage/MyPageSidebar";
import * as S from "./styled";

export default function Utils() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    isSidebarOpen && setIsSidebarOpen(false);
  }, [pathname]);

  const handleBellClick = () => {};

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <S.Container>
        <button onClick={() => handleBellClick()}>
          <BellIcon />
        </button>
        <button onClick={() => handleToggleSidebar()}>
          <HamburgerIcon />
        </button>
        {isSidebarOpen && (
          <MyPageSidebar
            isMounted={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
        )}
      </S.Container>
    </>
  );
}
