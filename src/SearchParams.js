import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlfor="location">
          Location: {location}
          <input
            id="location"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
