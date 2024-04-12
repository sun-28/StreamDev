import { useState, useRef, useEffect } from "react";
import NavButton from "./NavButton";
import UserDropdown from "../UserDropdown";

function NavRight() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBtnRef = useRef(null);

  useEffect(() => {
    const dropdownEl = dropdownRef.current;
    const dropdownBtnEl = dropdownBtnRef.current;

    function dropdownClickListener(event) {
      if (
        dropdownEl?.contains(event.target) ||
        dropdownBtnEl.contains(event.target)
      ) {
        // do nothing, click was inside container
        console.log("click inside");
      } else {
        // hide autocomplete, click was outside container.
        console.log("click outside");
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      window.addEventListener("click", dropdownClickListener);
    }

    return () => window.removeEventListener("click", dropdownClickListener);
  }, [showDropdown]);

  return (
    <div className="flex items-center mr-[10px] relative">
      <button
        className="h-[30px] w-[30px]"
        onClick={() => setShowDropdown(!showDropdown)}
        ref={dropdownBtnRef}
      >
        <img
          className="rounded-full"
          src="/"
          alt="User"
        />
      </button>

      {showDropdown && <UserDropdown dropdownRef={dropdownRef} />}
    </div>
  );
}

export default NavRight;
