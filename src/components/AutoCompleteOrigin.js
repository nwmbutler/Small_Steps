import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import ListGroup from 'react-bootstrap/ListGroup';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const AutoCompleteOrigin = (input_params) => {
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
    input_params.origin_result2(description)
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
        <ListGroup.Item key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </ListGroup.Item>
      );
    });

  return (
    <div

      ref={ref}>
     
        <input
          id="plcholder"
          class="form-control"
          type="text"
          placeholder={input_params.placeholder}
          value={value}
          onChange={handleInput}
          disabled={!ready}
          name={input_params.name}
        ></input>
      
      {status === "OK" && <ListGroup>{renderSuggestions()}</ListGroup>}
    </div>
  );
};

export default AutoCompleteOrigin;
