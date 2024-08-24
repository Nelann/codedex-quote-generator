import { useState } from "react";
import QuoteGenerator from "./components/QuoteGenerator";

const quotes: string[] = [
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "I am not afraid... I was born to do this. - Joan of Arc",
  "Believe you can and you’re halfway there. - Theodore Roosevelt",
];

const colors: string[] = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
];

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleGenerateQuote = () => {
    setCurrentQuote(Math.floor(Math.random() * quotes.length));
  };

  return (
    <section className="grid px-6 min-h-dvh place-content-center sm:px-4">
      <div
        className={`flex flex-col items-center justify-center gap-6 p-4 border rounded-md shadow-md ${
          colors[(Math.random() * colors.length) | 0]
        }`}
      >
        <h2 className="p-2 text-lg font-semibold bg-white border rounded-lg font-inter">
          Random Quote Generator
        </h2>
        <QuoteGenerator quote={quotes[currentQuote]} />
        <button
          type="button"
          title="Generate Random Quote"
          className="px-4 py-2 text-sm font-medium bg-white rounded-full hover:bg-slate-100 font-inter"
          onClick={handleGenerateQuote}
        >
          Generate Random Quote
        </button>
      </div>
    </section>
  );
}
