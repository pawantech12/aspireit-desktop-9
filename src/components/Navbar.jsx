import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className=" px-10 py-3 max-sm:px-5 flex items-center justify-between">
      <div>
        <img src="./Logo.png" alt="Asperiet Logo" />
      </div>
      <div className="w-1/2">
        <form
          action="
              "
          className="bg-[#EBEBEB]  flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <FiSearch className="text-neutral-700 w-5 h-5" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent px-1 py-1 w-full outline-none text-neutral-700"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-[#EBEBEB] px-4 py-1 rounded-full flex items-center gap-2">
          <button className="bg-white rounded-full p-2">
            <img src="./bell.png" alt="bell icon" />
          </button>
          <div>
            <img src="./avatar-pic.png" alt="avatar icon" />
          </div>
        </div>
        <figure>
          <img src="./jupiter.png" alt="Jupiter png" />
        </figure>
      </div>
    </header>
  );
};

export default Navbar;
