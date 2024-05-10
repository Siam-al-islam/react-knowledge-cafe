import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 w-full">
            <div className="bg-[#6047ec1b] px-12 py-5 rounded-lg border border-[#6047EC]">
                <h3 className="text-[#6047EC] font-bold text-xl">Spent time on read : <span>{readingTime}</span> min</h3>
            </div>
            <div className="mt-6 mb-4 rounded-lg p-7 bg-[#1111110f]">
                <h3 className="font-bold text-xl">Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;