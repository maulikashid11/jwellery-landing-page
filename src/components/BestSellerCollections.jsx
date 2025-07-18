export default function BestSellerCollections() {
  const collections = [
    {
      title: 'Diamond Mangalsutra',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Diamond_mangalsutra.jpg?v=1746010992',
    },
    {
      title: 'Gold Bangles',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Diamond_mangalsutra.jpg?v=1746010992',
    },
    {
      title: 'Gold Earrings',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Golden_earring.jpg?v=1746010992',
    },
    {
      title: 'Gold Chain',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Gold_chain.jpg?v=1746010992',
    },
    {
      title: 'Gold Mangalsutra',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Gold_mangalsutra.jpg?v=1746010992',
    },
    {
      title: 'Diamond Earrings',
      image: 'https://www.pngjewellers.com/cdn/shop/files/Diamond_earring.jpg?v=1746010992',
    },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">Bestseller Collections</h2>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {collections.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-36 object-cover rounded-full border border-gray-200 shadow-md"
            />
            <p className="mt-4 text-lg font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
