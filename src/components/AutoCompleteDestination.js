import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const AutoCompleteDestination = (input_params) => {
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
    input_params.origin_result1(e)
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    // input_params.origin_result3(description)
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
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div

    ref={ref}>
      <input
      size="50"
      placeholder={input_params.placeholder}
      value={value}
      onChange={handleInput}
      disabled={!ready}
      name = {input_params.name}
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default AutoCompleteDestination;
