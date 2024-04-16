const MainContent = ({ data, onImageClick }) => {
    return (
        <section className="border-4 border-slate-900 rounded-md p-4 grid grid-cols-3 items-center gap-4">
            {data.map((img) => (
                <img
                    className="w-40 h-40 rounded-lg cursor-pointer justify-self-center hover:scale-110 transition-all"
                    key={img.id}
                    id={img.id}
                    src={img.source}
                    alt="alt"
                    onClick={() => onImageClick(img.id)}
                />
            ))}
        </section>
    );
};

export default MainContent;
