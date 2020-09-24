import React from "react";

function ConversionComponent() {
  const handleOnChange = (event) => {
    let nCurrentValue = event.target.value;

    switch (event.target.name) {
      case "fahrenheit":
        nCurrentValue.length === 0
          ? (document.getElementById("temp-celsius-input").value = "")
          : (document.getElementById("temp-celsius-input").value =
              ((nCurrentValue - 32) * 5) / 9);
        break;
      case "celsius":
        nCurrentValue.length === 0
          ? (document.getElementById("temp-fahrenheit-input").value = "")
          : (document.getElementById("temp-fahrenheit-input").value =
              (nCurrentValue * 9) / 5 + 32);
        break;
      case "pounds":
        nCurrentValue.length === 0
          ? (document.getElementById("wt-kg-input").value = "")
          : (document.getElementById("wt-kg-input").value =
              nCurrentValue / 2.2);
        break;
      case "kilograms":
        nCurrentValue.length === 0
          ? (document.getElementById("wt-lb-input").value = "")
          : (document.getElementById("wt-lb-input").value =
              nCurrentValue * 2.2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="card text-white m-2 rounded d-inline-flex col-lg p-0">
      <h5 className="card-header text-dark text-center">Conversions</h5>
      <div className="card-body bg-dark text-white">
        <div className="row">
          <div class="input-group m-3 col-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Fahrenheit</span>
            </div>
            <input
              onChange={handleOnChange}
              name="fahrenheit"
              type="number"
              class="form-control"
              id="temp-fahrenheit-input"
              aria-describedby="basic-addon3"
            />
          </div>
          <div class="input-group m-3 col-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Celsius</span>
            </div>
            <input
              onChange={handleOnChange}
              name="celsius"
              type="number"
              class="form-control"
              id="temp-celsius-input"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="row">
          <div class="input-group m-3 col-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Pounds (lbs)</span>
            </div>
            <input
              onChange={handleOnChange}
              name="pounds"
              type="number"
              class="form-control"
              id="wt-lb-input"
              aria-describedby="basic-addon3"
            />
          </div>
          <div class="input-group m-3 col-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Kilograms (kg)</span>
            </div>
            <input
              onChange={handleOnChange}
              name="kilograms"
              type="number"
              class="form-control"
              id="wt-kg-input"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversionComponent;
