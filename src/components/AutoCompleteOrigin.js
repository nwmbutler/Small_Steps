import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const AutoCompleteOrigin = (origin_result) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
    origin_result.origin_result(e)
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Coordinates:", { lat, lng });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={id} onClick={handleSelect(suggestion)}>
        <strong>{secondary_text} {main_text}</strong>
        </li>
      );
    });

  return (
    <div

    ref={ref}>
      <input
      type="text"
      size="50"
      placeholder="Origin"
      value={value}
      onChange={handleInput}
      disabled={!ready}
      name = "origin"
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default AutoCompleteOrigin;
