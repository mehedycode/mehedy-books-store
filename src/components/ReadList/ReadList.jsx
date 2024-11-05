

const ReadList = ({ book }) => {
  const {image , author , bookName , category, yearOfPublishing ,publisher, tags} = book
  return (
    <div className="border-[rgba(19,19,19,0.15)] border-2 rounded-xl px-8 py-6 md:flex gap-10 items-center mb-6 mt-4 ">
      <div className="bg-[#F3F3F3] px-16 py-6 rounded-2xl flex justify-center">
        <img src={image} className="h-[172px]" alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-4 md:mt-0 mb-4 ">{bookName}</h2>
        <p className="mb-3">By: {author}</p>
        <span className="font-bold mr-6">Tag </span>{" "}
        {tags.map((tag, idx) => (
          <button
            className="btn btn-xs font-bold mr-3 bg-[rgba(35,190,10,0.05)] text-[#23BE0A]"
            key={idx}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReadList;