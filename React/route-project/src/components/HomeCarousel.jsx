import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div className="relative">
        <img className="h-[50vh] object-cover" src="https://contentstatic.techgig.com/thumb/msid-111431449,width-800,resizemode-4/Which-smartphones-will-dominate-the-market-in-July-2024.jpg?44244" alt="Mobiles" />
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
        <img className="h-[50vh] object-cover" src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="Laptops" />
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
