import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div className="relative">
        <img className="h-[50vh] object-cover" src="https://files.oaiusercontent.com/file-lW8gn5gJH7CDAKhjIDXMIP6d?se=2024-11-06T03%3A43%3A08Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D96c9f82d-1217-4ef1-ae53-1e6f86ca999b.webp&sig=/4jXWcFdgCCdOp9hxREJpKprgyaF7If7qDHaYbSEzZE%3D" alt="Mobiles" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute left-4 bottom-4 flex flex-col bg-white/80 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-700 lg:text-3xl">Mobiles</h2>
          <p className="mt-2 text-purple-600 font-bold text-5xl tracking-tight">
            40%
            <span className="text-lg font-medium text-gray-600 ml-2">offer</span>
          </p>
        </div>
      </div>

      <div className="relative">
        <img className="h-[50vh] object-cover" src="https://files.oaiusercontent.com/file-jqWsOmaElCUWmuuSYGVsyJpc?se=2024-11-06T03%3A46%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D579a66ce-bda3-4f8e-97c9-baad78b2a250.webp&sig=9rBRPrF8v%2BKwh47RBeqT8qaSX01L7LaK2hHrLGL099Q%3D" alt="Laptops" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute left-4 bottom-4 flex flex-col bg-white/80 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-700 lg:text-3xl">Laptops</h2>
          <p className="mt-2 text-purple-600 font-bold text-5xl tracking-tight">
            30%
            <span className="text-lg font-medium text-gray-600 ml-2">offer</span>
          </p>
        </div>
      </div>

      <div className="relative">
        <img className="h-[50vh] object-cover" src="https://www.jagranimages.com/images/newimg/14022024/14_02_2024-best_samsung_smart_watch_price_23653211.jpg" alt="Smart Watches" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute left-4 bottom-4 flex flex-col bg-white/80 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-700 lg:text-3xl">Smart Watches</h2>
          <p className="mt-2 text-purple-600 font-bold text-5xl tracking-tight">
            50%
            <span className="text-lg font-medium text-gray-600 ml-2">offer</span>
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
