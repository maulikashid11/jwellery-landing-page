import { FaTags } from 'react-icons/fa';

export default function NewArrivals() {
  const products = [
    {
      title: 'Celestial Foliage Gold Earcuff Earring For Woman',
      price: 'Rs. 30,624',
      image: 'https://www.pngjewellers.com/cdn/shop/files/GLS6951_C_20.jpg?v=1747917893&width=533',
    },
    {
      title: 'Celestia Wings Gold Stud Earring For Woman',
      price: 'Rs. 40,549',
      image: 'https://www.pngjewellers.com/cdn/shop/files/GLSP3400_C.jpg?v=1747917896&width=533',
    },
    {
      title: 'Bright Dot Gold Hoops & Huggies Earring For Woman',
      price: 'Rs. 33,624',
      image: 'https://www.pngjewellers.com/cdn/shop/files/GLSP3400_C.jpg?v=1747917896&width=533',
    },
    {
      title:
        'Cascade of Grace Gold & Diamond Drops & Dangler Earring For Woman',
      offer: 'Flat 50% off on making charge',
      price: 'From Rs. 159,281',
      originalPrice: 'Rs. 168,528.00',
      savings: 'You Save Rs. 9,247.00',
      image: 'https://www.pngjewellers.com/cdn/shop/files/RE15203_C_20_d373e027-b5d6-4eab-8fed-1e614b3e40df.jpg?v=1749800092&width=533',
    },
  ];

  return (
    <section className="bg-[#fdf9f3] py-14 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <div key={index} className="text-left">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl object-cover w-full h-64"
            />

            <h3 className="text-sm font-medium mt-4">{item.title}</h3>

            {item.offer && (
              <div className="flex items-center text-sm text-purple-600 mt-1">
                <FaTags className="mr-1 text-xs" />
                <span>{item.offer}</span>
              </div>
            )}

            <div className="mt-1 text-sm font-medium text-gray-800">
              {item.price}
            </div>

            {item.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {item.originalPrice}
              </div>
            )}

            {item.savings && (
              <div className="text-sm text-purple-600 font-medium mt-1">
                {item.savings}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          View All
        </button>
      </div>
    </section>
  );
}
