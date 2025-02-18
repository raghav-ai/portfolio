import { useState } from "react";

const Wordle = () => {
    const [turn, setTurn] = useState(0);
    const [pos, setPos] = useState(0);
    const [guess, setGuess] = useState(["hell"]);

    const renderWord = (word: string) => {
        const cells = [];
        for (let i = 0; i < 5; i++) {
            cells.push(
                <div 
                    key={i} 
                    className="bg-slate-600 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl"
                >
                    {i < word.length ? word[i] : ""}
                </div>
            );
        }
        return cells;
    };

    return (
        <div className="border-t-2 border-amber-300">
            <div className="mt-10 flex w-full justify-center gap-2">
                {guess.map((word, index) => (
                    <div key={index} className="flex gap-2">
                        {renderWord(word)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wordle;