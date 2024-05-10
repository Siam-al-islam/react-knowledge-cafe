const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-5 rounded-lg mt-4">
            <h3 className="font-semibold text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;