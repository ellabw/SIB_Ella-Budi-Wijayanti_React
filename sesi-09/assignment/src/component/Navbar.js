import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BiBook, BiBriefcaseAlt, BiHome, BiMessageAltDetail, BiUser } from 'react-icons/bi';

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <div>
      <nav className=" sticky top-0 z-30 bg-opacity-50 bg-bl backdrop-blur backdrop-filter">
        <div className="max-w-7xl mx-auto md:pt-8 pt-6 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className=" w-10 h-10 rounded bg-prl mr-8">
                <Link
                  to="/"
                  className="w-full `
                            h-full
                            flex
                            justify-center
                            items-center
                            font-extrabold
                            leading-6
                            text-xl
                            text-bl"
                >
                  E
                </Link>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-10">
                  <li
                    className={
                      splitLocation[1] === 'about'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/about" className="nav-link text-white">
                      About Me
                    </Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === 'experience'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/experience" className="nav-link text-white">
                      Experience
                    </Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === 'awards'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/awards" className="nav-link text-white">
                      Awards
                    </Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === 'skill'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/skill" className="nav-link text-white">
                      Skill
                    </Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === 'interest'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/interest" className="nav-link text-white">
                      Interest
                    </Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === 'contact'
                        ? ' border-solid border-b border-nb'
                        : ' border-solid border-b border-transparent hover:border-nb'
                    }
                  >
                    <Link to="/contact" className="nav-link text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:hidden fixed z-30 bg-nav bottom-4 w-80 left-2/4 -translate-x-2/4 rounded-full px-9 py-4 backdrop-blur backdrop-filter">
        <ul className="flex justify-between items-center">
          <li
            className={
              splitLocation[1] === ''
                ? ' bg-gradient-to-b from-nb to-nb_2 shadow-bx  rounded-full'
                : ' hover:bg-gradient-to-b hover:from-nb hover:to-nb_2 hover:shadow-bx hover:rounded-full'
            }
          >
            <Link to="/" className=" text-txt text-xl p-1.5 flex rounded-full">
              <BiHome />
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === 'overview'
                ? ' bg-gradient-to-b from-nb to-nb_2 shadow-bx  rounded-full'
                : ' hover:bg-gradient-to-b hover:from-nb hover:to-nb_2 hover:shadow-bx hover:rounded-full'
            }
          >
            <Link to="/overview" className="text-txt text-xl p-1.5 flex rounded-full">
              <BiUser />
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === 'project'
                ? ' bg-gradient-to-b from-nb to-nb_2 shadow-bx  rounded-full'
                : ' hover:bg-gradient-to-b hover:from-nb hover:to-nb_2 hover:shadow-bx hover:rounded-full'
            }
          >
            <Link to="/project" className="text-txt text-xl p-1.5 flex rounded-full">
              <BiBook />
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === 'skill'
                ? ' bg-gradient-to-b from-nb to-nb_2 shadow-bx  rounded-full'
                : ' hover:bg-gradient-to-b hover:from-nb hover:to-nb_2 hover:shadow-bx hover:rounded-full'
            }
          >
            <Link to="skill" className="text-txt text-xl p-1.5 flex rounded-full">
              <BiBriefcaseAlt />
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === 'contact'
                ? ' bg-gradient-to-b from-nb to-nb_2 shadow-bx  rounded-full'
                : ' hover:bg-gradient-to-b hover:from-nb hover:to-nb_2 hover:shadow-bx hover:rounded-full'
            }
          >
            <Link to="/contact" className="text-txt text-xl p-1.5 flex rounded-full">
              <BiMessageAltDetail />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
