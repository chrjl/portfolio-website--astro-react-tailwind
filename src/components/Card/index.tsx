import CardKeywords from './CardKeywords';
interface Props {
  title: string;
  keywords?: string[];
}

export default function Card({ title, keywords, description, links }: Props) {
  return (
    <div className="group border-solid border-2 border-black p-4 m-8 bg-gradient-to-b hover:from-gray-300 hover:to-gray-100">
      <div className="text-center font-semibold group-hover:font-bold">
        <h1 className="text-lg uppercase leading-snug underline">{title}</h1>
        {keywords && <CardKeywords keywords={keywords} />}
      </div>
    </div>
  );
}
