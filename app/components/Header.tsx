import Image from "next/image";
import { getCurrentDate } from "../utils/convertors";
import location from "@/public/icons/map.svg";

const Header = () => {
  return (
    <header className="">
      <div className="w-full flex flex-row justify-between">
        <div>
          <span>
            <Image
              width={28}
              height={28}
              alt="locationIcon"
              src={location}
              className="inline"
            />
          </span>
          تهران
        </div>
        <div>{getCurrentDate()}</div>
      </div>
    </header>
  );
};

export default Header;
