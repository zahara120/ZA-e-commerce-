const fs = require("fs");

// buat slug dari name
function createSlug(name) {
  const words = name.trim().split(" ");
  if (words.length === 1) {
    return words[0].toLowerCase();
  }
  return words.join("-").toLowerCase();
}

function transformData(input) {
  return input.map((item) => {
    return {
      name: item.name,
      slug: createSlug(item.name),
      description: item.disambiguatingDescription,
      excerpt:
        item.additionalProperty
          .find((prop) => prop.name === "detailedDescription")
          ?.value?.replace(/<\/?[^>]+(>|$)/g, "") || "",
      price:
        parseInt(
          item.offers.priceSpecification[0]?.price.replace(/\D/g, ""),
          10
        ) || 0,
      tags: item.isSimilarTo.map((similar) => similar.name),
      thumbnail: item.image[0]?.contentUrl || "",
      images: item.isSimilarTo
        .map((similar) => similar.image[0]?.contentUrl)
        .filter((url) => url),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  });
}

// Baca data dari file JSON
fs.readFile("dummy.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const transformedData = transformData(jsonData);

    // Simpen di file dataReady.json
    fs.writeFile(
      "dataReady.json",
      JSON.stringify(transformedData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log("Data successfully written to dataReady.json");
        }
      }
    );
  } catch (e) {
    console.error("Error parsing JSON:", e);
  }
});
