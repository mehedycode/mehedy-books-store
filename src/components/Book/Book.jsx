import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { author, bookName, image, bookId, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 p-6 border border-[rgba(19,19,19,0.15)] h-[482px]">
        <figure className="bg-[#F2F2F2] rounded-3xl py-8">
          <img className="h-[166px] " src={image} alt={bookName} />
        </figure>

        <div className="mt-6">
          <div className="flex items-center gap-8 mb-4">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-[rgba(35,190,10,0.05)] text-[#23BE0A]"
              >
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title mb-4">{bookName}</h2>
          <p>
            By: <span className="font-bold">{author}</span>
          </p>
          <div className="card-actions justify-between mt-9 items-center">
            <div className="text-lg font-bold">{category}</div>
            <div className="flex items-center gap-2 ">
              <span>5.00</span> <CiStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
