export default function SectionComponent() {
  return (
    <section className="my-2 sm:my-4 px-2 sm:px-6 w-[95%] sm:w-[70%] mx-auto border-2 border-green-200 bg-gradient-to-r from-pink-200 via-blue-200 to-purple-150 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:mt-4 mt-4 sm:mb-4">
        {/* Texto */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-3 px-1 sm:px-3">
          <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left mb-2 font-roboto text-gray-900">
            El mejor cine sin moverte de casa
          </h2>

          <article>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Disfruta de todos los estrenos
            </h3>
            <p className="text-justify text-gray-700 leading-relaxed text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt porta est non dapibus. Sed in facilisis metus. Integer
              pharetra, erat nec bibendum condimentum, tellus arcu semper lorem,
              imperdiet rhoncus quam velit sit amet turpis. Curabitur interdum
              finibus dictum.
            </p>
          </article>
        </div>

        {/* Imagen */}
        <div className="w-full sm:w-1/2 h-40 sm:h-60 rounded-2xl shadow-lg bg-[url('/assets/img1.jpg')] bg-center bg-cover bg-no-repeat aspect-square mx-auto mb-4" />
      </div>
    </section>
  );
}
