import React from 'react'

const BestSeller = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Our Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Double Opulence Yellow Gold Thushi Necklace",
                            price: "Rs. 49,105",
                            image: "https://www.pngjewellers.com/cdn/shop/files/GNCKT140_C_eb4ed508-a1db-47e8-a7cf-97081b2f3a49.jpg?v=1747916338&width=533",
                            url: "#"
                        },
                        {
                            title: "Auric Drift Gold Chain for Men and Women",
                            price: "Rs. 132,795",
                            image: "https://www.pngjewellers.com/cdn/shop/files/GCHN68_C_20.jpg?v=1747916715&width=533",
                            url: "#"
                        },
                        {
                            title: "Black Gem Gokak Yellow Gold Thushi",
                            price: "Rs. 18,163",
                            image: "https://www.pngjewellers.com/cdn/shop/files/GNCKT132_C_acd456e7-e62f-49d6-abfd-98d7a23dee1e.jpg?v=1747916347&width=533",
                            url: "#"
                        },
                        {
                            title: "Auric Rhythm Gold Chain",
                            price: "Rs. 86,414",
                            image: "https://www.pngjewellers.com/cdn/shop/files/GNCKT132_C_acd456e7-e62f-49d6-abfd-98d7a23dee1e.jpg?v=1747916347&width=533",
                            url: "#"
                        }
                    ].map((p, i) => (
                        <a key={i} href={p.url} target="_blank" rel="noreferrer">
                            <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
                                <img src={p.image} alt={p.title} className="w-full h-60 object-contain mb-4" />
                                <h3 className="text-sm font-medium mb-2">{p.title}</h3>
                                <p className="font-bold text-lg text-pink-600">{p.price}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default BestSeller