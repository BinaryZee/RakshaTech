const Question = ({data, onClick, isOpen}) => {
    return (
        <div className="border-b border-white/25 last:border-b-0 overflow-hidden">
            <div 
                onClick={onClick}
                className="flex justify-between gap-8 items-start cursor-pointer text-xl py-4">
                <h1>
                    {data.question}
                </h1>
                <span className={`${isOpen ? "rotate-180" : ""} ease-in-out duration-500`}>
                    {isOpen ? "-" : "+"}
                </span>
            </div>
            <p className={`text-lg opacity-75 ease-in-out duration-500 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
                {data.answer}
            </p>
        </div>
    );
}

<<<<<<< HEAD
export default Question;
=======
export default Question;
>>>>>>> 61528e56937e22cde362e4cc26ca5fc7644ca763
