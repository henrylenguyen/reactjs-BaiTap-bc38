import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  {
    id: 1,
    title: "Bài tập nộp",
    to: "/",
  },
  {
    id: 2,
    title: "Bài tập khác",
    to: "/bai-tap-khac",
  },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="isolate bg-[#191919]">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        <div className="px-[2.5rem] py-[2.5rem] lg:px-[3rem]">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <NavLink to={"/"} className="-m-1.5 p-1.5">
                  <img
                    className="h-[7rem]"
                    src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
                    alt="cyberSoft"
                  />
                </NavLink>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold  text-[#fea255] hover:text-[#e07211]"
                        : "font-semibold  text-white hover:text-[#fea255]  "
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                className="fixed inset-x-0 top-0 z-[9999] overflow-y-auto bg-[#191919]  px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between ">
                  <div className="flex">
                    <NavLink to={"/"} className="-m-1.5 p-1.5">
                      <img
                        className="h-8"
                        src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
                        alt="cyberSoft"
                      />
                    </NavLink>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6 text-center">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.id}
                          to={item.to}
                          className={({ isActive }) =>
                            isActive
                              ? "font-semibold  text-[#fea255] hover:text-[#e07211] -mx-3 block py-5 leading-7"
                              : "font-semibold  text-white hover:text-[#fea255]  -mx-3 block py-5  leading-7"
                          }
                        >
                          {item.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
