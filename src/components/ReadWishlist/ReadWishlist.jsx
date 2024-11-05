import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getMarkAsRead } from "../server/MarkAsRead";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";
import { getWishList } from "../server/Wishlist";

const ReadWishlist = () => {
  const [books, setBooks] = useState([])
  const [wishlist , setWishlist] = useState([])
const BooksData = useLoaderData()
console.log(books);
  useEffect(() => {
  

const storedData = getMarkAsRead()

    const filter = BooksData.filter(book => storedData.includes(book.bookId))
    setBooks(filter)

    const wishliststored = getWishList();

    const wishlist = BooksData.filter((book) => wishliststored.includes(book.bookId));
    setWishlist(wishlist);

},[])

  return (
    <div className="mb-8 md:mb-32">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {books.map((book) => (
            <ReadList key={book.bookId} book={book}></ReadList>
          ))}
        </TabPanel>
        <TabPanel>
          {wishlist.map((book) => (
            <WishList key={book.bookId} book={book}></WishList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadWishlist;