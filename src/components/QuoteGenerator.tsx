type QuoteGeneratorProps = {
  quote: string;
};

export default function QuoteGenerator({ quote }: QuoteGeneratorProps) {
  return (
    <div className="p-2 bg-white rounded-lg">
      <p className="text-2xl font-medium font-caveat">{quote}</p>
    </div>
  );
}
