const FiltersSidebar = () => {
  return (
    <aside className="w-64 sticky top-28 h-fit">
      <h3 className="text-xs tracking-widest text-orange-500 mb-4">
        FILTERS
      </h3>

      {["Price","Product Type","Size","Craft","Material","Occasion"].map(
        (item) => (
          <div
            key={item}
            className="border-b py-4 text-sm font-medium cursor-pointer"
          >
            {item}
          </div>
        )
      )}
    </aside>
  );
};

export default FiltersSidebar;
