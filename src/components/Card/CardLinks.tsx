export interface Link {
  url: string;
  type?: string;
  description?: string;
}

interface Props {
  links: Link[];
}

export default function CardLinks({ links }: Props) {
  return links.map(({ type, url, description }) => (
    <div className="flex flex-row items-center" >
      <span className="h-4 w-6 text-xs">
        {type === 'repo' ? '' : null}
      </span>
      <a href={url} target="_blank" className="text-xs">
        {description || url}
      </a>
    </div>
  ));
}
