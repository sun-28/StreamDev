import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import DropdownDivider from "./DropdownDivider";
import DropdownButton from "./DropdownButton";
import { useNavigate } from "react-router-dom";
function UserDropdown({ dropdownRef }) {
  const { isDarkTheme, toggleTheme } = useContext(AppContext);
  let navigate = useNavigate();
  return (
    <div
      ref={dropdownRef}
      className="absolute p-[10px] ml-0 right-0 bg-dropdown-bg-color rounded-md 
      top-[46px] shadow-md w-[204.72px] laptop:w-[201.719px] z-10"
    >
      <div className="flex items-center p-[5px]">
        <a
          href="/#"
          className="inline-block w-10 h-10 rounded-full overflow-hidden"
        >
          <img src="" alt="User" />
        </a>
        <span className="flex-1 pl-[10px] font-inter font-semibold text-[13px] mt-[-3px] laptop:mt-[-2px]">
          Test
        </span>
      </div>
      <DropdownDivider />
      <div>
        <DropdownButton label="Channel">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z"
              ></path>
              <path d="M12 8h4v1.51V9l2-1v4l-2-1v1h-4V8z"></path>
            </g>
          </svg>
        </DropdownButton>
        <div onClick={()=> {
          navigate('/stream/dashboard')
        }}>
        <DropdownButton label="Creator Dashboard">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            >
            <g>
              <path d="M7 10h2v4H7v-4zM13 6h-2v8h2V6z"></path>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm12 2H4v12h12V4z"
                ></path>
            </g>
          </svg>
        </DropdownButton>
                </div>
      </div>

      <DropdownDivider />
      <div>
        <DropdownButton label="Wallet">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path d="M12 11h2v2h-2v-2z"></path>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M13.45 2.078L2 6v12h14a2 2 0 002-2V8a2 2 0 00-2-2V4.001a2 2 0 00-2.55-1.923zM14 6V4.004L8.172 6H14zM4 8v8h12V8H4z"
              ></path>
            </g>
          </svg>
        </DropdownButton>
      </div>
      <DropdownDivider />
      <div>
        <DropdownButton label="Settings">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
          >
            <g>
              <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
              ></path>
            </g>
          </svg>
        </DropdownButton>
        <button
          htmlFor="toggle-dark-theme"
          className="flex items-center p-[5px] w-full"
          onClick={() => toggleTheme()}
        >
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z"
              ></path>
            </g>
          </svg>
          <span className="text-[13px] font-inter font-normal pl-[5px] mt-[-1px]">
            Dark Theme
          </span>
          <div
            className="ml-auto w-[35px] h-[20px] border-[2px] border-toggle-border
            rounded-full relative"
          >
            {isDarkTheme && (
              <div
                className="w-[6px] h-[10px] transform rotate-45 translate-y-[-50%] absolute
                border-[2px] border-r-[rgb(169, 112, 255)] border-b-[rgb(169, 112, 255)]
                border-t-[transparent] border-l-[transparent] top-[40%] left-[5px]"
              ></div>
            )}
            <div
              className="absolute w-[12px] h-[12px] bg-toggle-ball rounded-full transform 
              translate-y-[-50%] top-[50%] transition-[left] ease-linear 
              motion-reduce:transition-none"
              style={{
                left: isDarkTheme ? "calc(100% - (12px + 2px))" : "2px",
              }}
            ></div>
          </div>
        </button>
      </div>
      <DropdownDivider />
      <div>
        <DropdownButton label="Log Out">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
              <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
            </g>
          </svg>
        </DropdownButton>
      </div>
    </div>
  );
}

export default UserDropdown;
