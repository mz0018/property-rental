function MapSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-blue-500 p-5">
        <h2 className="text-2xl font-bold mb-2">MZ Property Rental</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>
      <div className="bg-red-500 md:col-span-2 p-5">
        <div className="flex flex-col gap-4">
          <div className="bg-green-500 p-3">Search bar</div>
          <div className="bg-gray-500 p-3">Map</div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
