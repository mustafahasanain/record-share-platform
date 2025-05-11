import Image from "next/image";
import Link from "next/link";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <figure className="details">
          {userImg && (
            <Image
              src={userImg || "/assets/images/dummey.jpg"}
              alt="User"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </figure>

        <aside>
          <Link href="/">
            <Image
              src="/assets/icons/upload.svg"
              alt="Upload"
              width={16}
              height={16}
            />

            <span>Upload a Video</span>
          </Link>

          <div className="record">
            <button className="primary-btn">
              <Image
                src="/assets/icons/record.svg"
                alt="Record"
                width={16}
                height={16}
              />

              <span>Record a Video</span>
            </button>
          </div>
        </aside>
      </section>

      {/* section for filters */}
      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders..."
          />

          <Image
            src="/assets/icons/search.svg"
            alt="Search"
            width={16}
            height={16}
          />
        </div>

        {/* TODO: create the dropdown */}
        {` <DropdownList /> `}
      </section>
    </header>
  );
};

export default Header;
