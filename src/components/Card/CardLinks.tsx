import {
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

import githubMark from '../../assets/github-mark.svg';

const iconMap: { [type: string]: React.ReactNode } = {
  repo: (
    <img className="inline-block align-middle h-full" src={githubMark.src} />
  ),
  asset: <ArrowTopRightOnSquareIcon className="h-full" />,
  code: <CodeBracketSquareIcon className="h-full" />,
  doc: <DocumentTextIcon className="h-full" />,
  generic: <LinkIcon className="h-full" />,
};

export interface LinksType {
  type: string;
  url: string;
  description?: string;
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
        <IconLink
          key={url}
          icon={iconMap[type]}
          url={url}
          description={description}
        />
      ))}
    </div>,
    <div className="mt-4">
      {repos.map(({ type, url }) => (
        <IconLink key={url} icon={iconMap[type]} url={url} />
      ))}
    </div>,
  ];
}

interface IconLinkProps {
  icon: React.ReactNode;
  url: string;
  description?: string;
}

function IconLink({ icon, url, description }: IconLinkProps) {
  return (
    <div className="flex flex-row items-center">
      <span className="h-4 w-6 flex">{icon || iconMap.generic}</span>
      {description ? (
        <a href={url} target="_blank" className="text-sm">
          {description}
        </a>
      ) : (
        <a href={url} target="_blank" className="text-xs">
          {url}
        </a>
      )}
    </div>
  );
}
