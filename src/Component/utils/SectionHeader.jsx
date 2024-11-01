function SectionHeader({ subHead, head }) {
  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <div className="text-center md:w-1/2">
        <p className="text-base md:text-xl font-semibold text-orange-500">
          {subHead}
        </p>
        <h1 className="text-xl md:text-4xl font-extrabold">{head}</h1>
      </div>
    </div>
  );
}

export default SectionHeader;
