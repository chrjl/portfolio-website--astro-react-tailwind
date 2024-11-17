import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface Props {
  title: string;
  subtitle?: string;
  subsubtitle?: string;
  description?: string;
  links?: {
    url: string;
    type?: string;
    profile?: string;
  }[];
}

export default function Header({
  title,
  subtitle,
  subsubtitle,
  description,
  links,
}: Props) {
  const linkElements = links
    ? links.map((link) => {
        if (link.type === 'GitHub') {
          return (
            <span className="flex items-center">
              <FaGithub />
              <a className="pl-1" href={`https://github.com/${link.profile}`}>
                {link.profile}
              </a>
            </span>
          );
        } else if (link.type === 'LinkedIn') {
          return (
            <span className="flex items-center">
              <FaLinkedin />
              <a
                className="pl-1"
                href={`https://linkedin.com/in/${link.profile}`}
              >
                {link.profile}
              </a>
            </span>
          );
        }

        return <a href={link.url}>{link.url}</a>;
      })
    : [];

  return (
    <header className="my-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center">{title}</h1>

      {subtitle ? (
        <h2 className="mt-4 text-xl font-bold text-center">{subtitle}</h2>
      ) : null}

      {subsubtitle ? (
        <div className="mt-1 text-base font-medium text-center">
          {subsubtitle}
        </div>
      ) : null}

      <h3 className="mt-4 text-sm flex flex-col justify-center items-center sm:hidden">
        {[description, ...linkElements].filter(Boolean)}
      </h3>

      <h3 className="mt-4 text-sm flex justify-center items-center max-sm:hidden">
        {[description, ...linkElements]
          .filter(Boolean)
          .map((element, index) => (
            <>
              {index === 0 ? null : <span className="px-4">|</span>} {element}
            </>
          ))}
      </h3>
    </header>
  );
}
