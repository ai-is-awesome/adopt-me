import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import "regenerator-runtime/runtime";
import Results from "./Results";

const BREEDS = ["BREED1", "BREED2", "BREED3", "BREED4", "BREED5"];

const SearchParams = () => {
  let animalsToShow = ANIMALS.filter((animal) => {
    if (animal !== "cat") {
      return true;
    } else {
      return false;
    }
  });
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", animalsToShow);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
    console.log(animals);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    console.log("effect reached");
    pet.breeds(animal).then(
      ({ breeds }) => setBreeds(breeds.map((breed) => breed.name)),
      (err) => console.error(err)
    );
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        {/* Breed Dropbox */}
        <BreedDropdown />
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
