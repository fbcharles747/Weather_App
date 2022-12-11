import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, GEO_API_URL } from "../../api";
const axios = require("axios");
export default function Search(props) {
  const [search, setSearch] = useState(null);
  const { onSearchChange } = props;
  // pass data to App component

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  function loadOptions(input) {
    return fetch(
      `${GEO_API_URL}/cities?limit=5&namePrefix=${input}`,
      geoAPIOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return {
          options: res.data.map((city) => {
            return {
              label: `${city.name}, ${city.countryCode}`,
              value: `${city.latitude} ${city.longitude}`,
            };
          }),
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={1000}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
