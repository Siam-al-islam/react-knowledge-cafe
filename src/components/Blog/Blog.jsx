const Blog = ({ blog }) => {
    const { cover, title, author_image, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className="rounded-lg" src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex gap-6 mt-7">
                    <img className="w-14" src={author_image} alt="" />
                    <div>
                        <span className="text-2xl font-bold">{author}</span>
                        <p className="text-[#11111192]">Publish Date: {posted_date}</p>
                    </div>
                </div>
                <div className="text-[#11111192] font-medium text-xl">
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-4">{title}</h2>
            <p className="my-4">{
                hashtags.map((hash, i) => <span key={i}><a href="#">#{hash} </a></span>)}
            </p>
        </div>
    );
};

export default Blog;