fetch("config.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error fetching config: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    const priceVersions = data.priceVersions;

    const priceForm = document.getElementById("form");
    priceForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const selectedVersion = document.getElementById("price").value;
      const selectedSize = document.getElementById("kg-size").value;
      const kg = parseFloat(document.querySelector(".kgVariables").value);
      const isAddOnly = document.querySelector("#isAddOnly").checked;

      if (!kg || kg <= 0) {
        alert("Please enter a valid Kg value.");
        return;
      }
      const selectedPriceVersion = priceVersions.find(
        (version) => version.name === selectedVersion
      );

      if (!selectedPriceVersion) {
        alert("Please select a valid price version.");
        return;
      }

      const priceIndex = [
        "Big",
        "Medium",
        "Small",
        "UnderSmall",
        "Reject",
      ].indexOf(selectedSize);

      if (priceIndex === -1) {
        alert("Please select a valid size.");
        return;
      }
      const price = selectedPriceVersion.prices[priceIndex];
      const totalCost = kg * price;

      // Update the preview
      document.querySelector(
        ".preview1"
      ).textContent = `Total Cost: ${totalCost.toFixed(2)}`;

      // Update the table (Kg and Total)
      const previewTable = document.getElementById("previewTable");
      const tableRows = previewTable.getElementsByTagName("tr");
      const selectedRow = tableRows[priceIndex + 1];
      const kgCell = selectedRow.cells[1]; // Update Kg cell (assuming Kg is at index 1)
      const totalCell = selectedRow.cells[2];

      kgCell.textContent = kg.toFixed(2); // Update Kg value
      totalCell.textContent = totalCost.toFixed(2); // Update Total cost
    });
  })
  .catch((error) => {
    console.error("Error loading config:", error);
    alert(
      "Failed to load pricing configuration. Please check the config.json file."
    );
  });
