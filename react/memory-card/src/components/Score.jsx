const Score = ({ currentScore, highScore, round }) => {
    return (
        <aside className="flex flex-col gap-4 ">
            <section className="p-4 bg-slate-900 shadow-md rounded-lg self-start capitalize text-white font-semibold w-full">
                <h2 className="mb-2 text-xl">round: {round}</h2>
                <p className="pl-2 mb-1 text-sm">
                    current score: {currentScore}
                </p>
                <p className="pl-2 text-sm">high score: {highScore}</p>
            </section>
            <section className="p-4 bg-slate-900 shadow-md rounded-lg self-start capitalize text-white font-semibold w-full">
                <h2 className="mb-2 text-xl">how to play:</h2>
                <p className="pl-2 mb-1 text-sm">
                    just don&apos;t click the same image twice.
                </p>
            </section>
        </aside>
    );
};

export default Score;
