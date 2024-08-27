import React, { useEffect, useState } from "react";
import Select from "react-select";
import { tyres, brandOptions, sortOptions } from "../utils/reviews";
import TyreCard from "./TyreCard";
const FilterComp = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [filteredTyre, setFilteredTyre] = useState(tyres);

  const handleBrandChange = (option) => {
    setSelectedBrand(option);

    console.log(tyres);
    console.log(filteredTyre, "fiter");
    console.log("Selected brand:", option);
  };
  useEffect(() => {
    if (!selectedBrand) {
      setFilteredTyre(tyres);
    } else {
      setFilteredTyre(
        tyres.filter((tyre) => tyre.brand === selectedBrand.value)
      );
    }
  }, [selectedBrand]);
  useEffect(() => {
    if (!selectedSort) {
      // No sort selected, use original tyres list
      setFilteredTyre(tyres);
    } else if (selectedSort.value === "lowest-price") {
      console.log(selectedSort.value, "reiuud");

      // Create a copy of the tyres array and sort it by price in ascending order
      let sorted = [...tyres].sort((a, b) => a.price - b.price);
      console.log(sorted, "iueruid");
      setFilteredTyre(sorted);
    } else if (selectedSort.value === "highest-price") {
      // Create a copy of the tyres array and sort it by price in descending order
      let sorted = [...tyres].sort((a, b) => b.price - a.price);
      setFilteredTyre(sorted);
    }
  }, [selectedSort]);

  const handleSortChange = (option) => {
    setSelectedSort(option);

    console.log("Selected sort option:", option);
  };

  return (
    <div className="container mt-4">
      <h5>Tyres sold by this Dealer</h5>
      <div className="d-flex justify-content-end align-items-center mb-3 me-2">
        <div className="d-flex align-items-center" style={{ width: "18rem" }}>
          <Select
            id="filter"
            options={brandOptions}
            value={selectedBrand}
            onChange={handleBrandChange}
            className="basic-single me-2"
            classNamePrefix="select"
            isClearable={true}
            placeholder="Filter By"
            styles={{
              container: (provided) => ({
                ...provided,
                width: "12rem",
              }),
              menu: (provided) => ({
                ...provided,
              }),
            }}
          />
          <Select
            id="sort"
            options={sortOptions}
            value={selectedSort}
            onChange={handleSortChange}
            className="basic-single me-2"
            classNamePrefix="select"
            isClearable={true}
            placeholder="Sort By"
            styles={{
              container: (provided) => ({
                ...provided,
                width: "12rem",
              }),
              menu: (provided) => ({
                ...provided,
                width: "12rem",
              }),
            }}
          />
        </div>

        <a href="#" className="text-primary">
          Advanced
        </a>
      </div>
      <div className="row ">
        {filteredTyre.map((tyre, index) => (
          <TyreCard key={index} {...tyre} />
        ))}
      </div>
      <div className="d-flex justify-content-center ">
        <button className="btn btn-outline-secondary mt-3 ">View more</button>
      </div>
    </div>
  );
};

export default FilterComp;
