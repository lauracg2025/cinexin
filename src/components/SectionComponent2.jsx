export default function SectionComponent2() {
  return (
    <section className="my-12 px-4 sm:mt-18 sm:px-6 w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        <div className="w-full sm:w-1/2 h-64 sm:h-[400px] rounded-xl shadow-lg bg-[url('/assets/img2.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-6 px-2 sm:px-0">
          <article>
            <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-6 font-roboto">
              Rememora los clásicos
            </h2>
            <h3 className="font-bold text-2xl mb-3">
              Las historias de siempre con la mejor calidad
            </h3>
            <p className="text-justify text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt porta est non dapibus. Sed in facilisis metus. Integer
              pharetra, erat nec bibendum condimentum, tellus arcu semper lorem,
              imperdiet rhoncus quam velit sit amet turpis. Curabitur interdum
              finibus dictum. Ut vel egestas purus. Curabitur condimentum
              faucibus auctor. Ut condimentum orci risus, laoreet elementum sem
              molestie vel.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed tincidunt porta est non dapibus. Sed in facilisis metus.
              Integer pharetra, erat nec bibendum condimentum, tellus arcu
              semper lorem, imperdiet rhoncus quam velit sit amet turpis.
              Curabitur interdum finibus dictum. Ut vel egestas purus. Curabitur
              condimentum faucibus auctor. Ut condimentum orci risus, laoreet
              elementum sem molestie vel.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
