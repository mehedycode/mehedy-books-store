import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
const {bookId} = useParams()
  const id = parseInt(bookId)
  

const data = useLoaderData() 

  const book = data.find(book => book.bookId === id)
  console.log(book);
  const {
    author,
    bookName,
    review,
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages, image
  } = book;

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-14 mb-7 md:mb-28">
        <div className="bg-[#F2F2F2] p-20 rounded-xl">
          <img src={image} className="max-w-full md:max-w-sm rounded-lg shadow-2xl " />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">{bookName}</h1>
          <p className="">By : {author}</p>
          <div className="divider"></div>
          <p className="font-bold text-xl">{category}</p>
          <div className="divider"></div>
          <h4>
            <span className="font-bold">Review : </span>
            {review}
          </h4>
          <div className="mt-5">
            <p>
              <span className="font-bold mr-6">Tag </span>{" "}
              {tags.map((tag, idx) => (
                <button
                  className="btn btn-xs font-bold mr-3 bg-[rgba(35,190,10,0.05)] text-[#23BE0A]"
                  key={idx}
                >
                  #{tag}
                </button>
              ))}
            </p>
          </div>
          <div className="divider"></div>

          <div className="flex items-center text-sm mb-6">
            <div className="space-y-2">
              <p className="mr-20 text-[rgba(19,19,19,0.7)]">
                Number of Pages:
              </p>
              <p className="mr-20 text-[rgba(19,19,19,0.7)]">Publisher:</p>
              <p className="mr-20 text-[rgba(19,19,19,0.7)]">
                Year of Publishing:
              </p>
              <p className="mr-20 text-[rgba(19,19,19,0.7)]">Rating:</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">{totalPages}</p>
              <p className="font-bold">{publisher}</p>
              <p className="font-bold">{yearOfPublishing}</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <button className="btn btn-outline">Mark As Read</button>
          <button className="btn btn-primary bg-[#50B1C9] text-white border-none ml-7">
           Add Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;