import React from 'react'
import "./SoundsChart.css"

const oldsounds = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    },
    {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
        "images": [
            "https://i.dummyjson.com/data/products/6/1.png",
            "https://i.dummyjson.com/data/products/6/2.jpg",
            "https://i.dummyjson.com/data/products/6/3.png",
            "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/7/1.jpg",
            "https://i.dummyjson.com/data/products/7/2.jpg",
            "https://i.dummyjson.com/data/products/7/3.jpg",
            "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/8/1.jpg",
            "https://i.dummyjson.com/data/products/8/2.jpg",
            "https://i.dummyjson.com/data/products/8/3.jpg",
            "https://i.dummyjson.com/data/products/8/4.jpg",
            "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        ]
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Infinix",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/9/1.jpg",
            "https://i.dummyjson.com/data/products/9/2.png",
            "https://i.dummyjson.com/data/products/9/3.png",
            "https://i.dummyjson.com/data/products/9/4.jpg",
            "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        ]
    },
    {
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        "images": [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            "https://i.dummyjson.com/data/products/10/2.jpg",
            "https://i.dummyjson.com/data/products/10/3.jpg",
            "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
    }
]

const sounds = [
    {
        "id": 1,
        "name": "Tape and Vinyl",
        "company": "company-1",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    }
    ,
    {
        "id": 2,
        "name": "Tape and Vinyl",
        "company": "company-2",
        "author": "abc",
        "imageSrc": "https://plus.unsplash.com/premium_photo-1681503974126-7ecd8e46251c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    }
    ,
    {
        "id": 3,
        "name": "Tape and Vinyl",
        "company": "company-3",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    },
    {
        "id": 4,
        "name": "Tape and Vinyl",
        "company": "company-4",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    },
    {
        "id": 5,
        "name": "Tape and Vinyl",
        "company": "company-5",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    },
    {
        "id": 6,
        "name": "Tape and Vinyl",
        "company": "company-1",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    }
    ,
    {
        "id": 7,
        "name": "Tape and Vinyl",
        "company": "company-2",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1565145368739-29e5a81be478?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    }
    ,
    {
        "id": 8,
        "name": "Tape and Vinyl",
        "company": "company-3",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    },
    {
        "id": 9,
        "name": "Tape and Vinyl",
        "company": "company-4",
        "author": "abc",
        "imageSrc": "https://plus.unsplash.com/premium_photo-1682600101311-1121bc732450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    },
    {
        "id": 10,
        "name": "Tape and Vinyl",
        "company": "company-5",
        "author": "abc",
        "imageSrc": "https://images.unsplash.com/photo-1599467556534-6a0cfcb0daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

    },
]

function SoundsChart() {
    return (
        <div className='soundsChart' >
            <div className="chart-head">
                <div className="pack">
                    <span>Pack</span>
                </div>
                <div className="owner">
                    <span>Owner</span>
                </div>

            </div>
            <div className="chart-contents">
                <div className="packs">

                    {sounds.map((sounds) => (
                        <div className={sounds.id % 2 === 0 ? 'pack-item' : 'odd-item'} key={sounds.id} >
                            <img className='pack-img' src={sounds.imageSrc} alt="img" />
                            <span className='pack-number'>{sounds.id}</span>

                            <span className='pack-name'>
                                {sounds.name}
                            </span>
                            <span className='pack-author'>
                                {sounds.author}
                            </span>

                        </div>

                    ))

                    }

                </div>
            </div>

        </div >
    )
}

export default SoundsChart