/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1709425470/vendor/5775/catalog/product/2/0/20170206011016_file_5897ccf88452d.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: '',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/81Gx48J+h5L.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: '',
      },  {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://b2866409.smushcdn.com/2866409/wp-content/uploads/2023/06/01.png?lossy=1&strip=1&webp=1',
        imageAlt: "Front of men's Basic Tee in .",
        price: '$35',
        color: '',
      },  {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://bouqs.com/media/W1siZiIsIjIwMjMvMDQvMTEvMTkvNDkvMzAvNmFjZTZmYzUtY2MxNi00YzBlLTg0NjQtYTRkMTMzYzdlYzcyL01PTTIzX0lyaXNfT1NfY2hlY2tlclZhc2VfMTg5X1dlYi5qcGciXV0/MOM23_Iris_OS_checkerVase_189_Web.jpg?sha=b9749dd964291698',
        imageAlt: "Front of men's Basic Tee in .",
        price: '$35',
        color: '',
      },
    // More products...
  ]
  
  export default function  FlowerList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  