interface CardKeywordsProps {
  keywords: string[];
}

export default function CardKeywords({ keywords }: CardKeywordsProps) {
  return (
    <ul className="mt-3 ml-0 text-xs flex flex-wrap justify-center">
      {keywords.map((keyword) => (
        <li key={keyword} className="mr-3 inline-block uppercase last:mr-0">
          {keyword}
        </li>
      ))}
    </ul>
  );
}
