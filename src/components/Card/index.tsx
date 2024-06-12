import Markdown from 'react-markdown';

import CardKeywords from './CardKeywords';
import CardLinks from './CardLinks';
import type { LinksType } from './CardLinks';

interface Props {
  title: string;
  keywords?: string[];
  description?: string;
  links?: LinksType[];
}

export default function Card({ title, keywords, description, links }: Props) {
  return (
    <div className="group border-solid border-2 border-black p-4 m-8 bg-gradient-to-b hover:from-gray-300 hover:to-gray-100">
      <div className="text-center font-semibold group-hover:font-bold">
        <h1 className="text-lg uppercase leading-snug underline">{title}</h1>
        {keywords && <CardKeywords keywords={keywords} />}
      </div>

      {description && (
        <div className="mt-8 text-sm font-content group-hover:[&_a]:font-bold">
          <Markdown>{description}</Markdown>
        </div>
      )}

      {links && (
        <div className="mt-8 group-hover:font-bold">
          <CardLinks links={links} />
        </div>
      )}
    </div>
  );
}
