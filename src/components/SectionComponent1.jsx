export default function SectionComponent1() {
  return (
    <section className="my-24 sm:mb-6 p-4 sm:p-20 relative flex flex-col sm:flex-row justify-center sm:justify-end rounded-bl-xxl rounded-tr-xxl bg-gradient-to-tr from-purple-400 via-blue-400 to-blue-400 text-gray-100">
      <article className="w-full sm:w-1/2 flex flex-col justify-center space-y-6 px-2 sm:px-6 items-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-2 font-roboto -ml-2 sm:ml-0">
          Millones de historias, una plataforma: CINEXIN
        </h2>
      </article>
      <div className="w-full sm:w-1/2 relative flex justify-center mb-10 sm:mb-0">
        <img
          src="/assets/img3.jpg"
          alt="imagen de fondo"
          className="sm:absolute sm:-bottom-2 sm:right-14 mx-auto block max-w-[250px] sm:max-w-[400px]"
        />
      </div>
    </section>
  );
}
