export interface LinksType {
  type: string;
  url: string;
  description: string;
}

interface Props {
  links: LinksType[];
}

export default function CardLinks({ links }: Props) {
  const repos = links.filter((link) => link.type === 'repo');
  const target = links.filter((link) => link.type === 'target');
  const otherLinks = links.filter(
    (link) => !['repo', 'target'].includes(link.type)
  );

  return [
    <div>
      {otherLinks.map(({ type, url, description }) => (
        <IconLink icon={iconMap[type]} url={url} description={description} />
      ))}
    </div>,
    <div className="mt-4">
      {repos.map(({ type, url }) => (
        <IconLink icon={iconMap[type]} url={url} />
      ))}
    </div>,
  ];
}

interface IconLinkProps {
  url: string;
  description?: string;
}

function IconLink({ url, description }: IconLinkProps) {
  return (
    <div className="flex flex-row items-center">
      {description ? (
        <a href={url} className="text-sm">
          {description}
        </a>
      ) : (
        <a href={url} className="text-xs">
          {url}
        </a>
      )}
    </div>
  );
}
