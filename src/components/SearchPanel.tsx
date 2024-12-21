import SearchFilters from "./SearchFilters";

const SearchPanel = () => {
  return (
    <div className="container mx-auto py-5 px-4 pt-10">
      <div className="mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <SearchFilters />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
