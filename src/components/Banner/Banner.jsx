import bannerimg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div>
        <div className="hero bg-base-200 md:px-20 md:py-10  mb-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerimg}
      className="md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-[#23BE0A] border-none btn-primary hover:bg-transparent hover:text-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;