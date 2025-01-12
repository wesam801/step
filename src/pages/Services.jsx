import React from 'react';

const ProductCard = ({ imgSrc, brand, productName, price, originalPrice }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={imgSrc}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {productName}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${originalPrice}
              </p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Services = () => {
  const products = [
    {
      imgSrc:
        'https://i.pinimg.com/736x/cb/95/84/cb95847297bddbd1f75636ca8ac7d08e.jpg',
      brand: 'sale',
      productName: 'Mobile App Development',
      price: 149,
      originalPrice: 199,
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/b2/b4/4b/b2b44b22cca75f838ea5fa77f78c76c7.jpg',
      brand: 'sale',
      productName: 'Website Design',
      price: 149,
      originalPrice: 199,
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/36/d9/a2/36d9a22e85ffa3d9aaac33f78a98153a.jpg',
      brand: 'sale',
      productName: 'Markting',
      price: 149,
      originalPrice: 199,
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/54/3a/9b/543a9b14f3920e4d48c0d4d594eaa4ea.jpg',
      brand: 'sale',
      productName: 'SEO',
      price: 149,
      originalPrice: 199,
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/12/72/b0/1272b0d8a44337e393b345d0bbab2748.jpg',
      brand: 'sale',
      productName: 'Motion Graphic',
      price: 149,
      originalPrice: 199,
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/12/72/b0/1272b0d8a44337e393b345d0bbab2748.jpg',
      brand: 'sale',
      productName: 'Motion Graphic',
      price: 149,
      originalPrice: 199,
    },
  ];

  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">Our Services</h1>
      <h2 className="text-sm text-slate-700">
        We provide innovative digital solutions that increase the efficiency of
        your business and enhance your success. Join us to achieve your goals
        effectively and professionally
      </h2>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Services;
