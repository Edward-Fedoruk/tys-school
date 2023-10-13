const ua = require('./node_modules/@strapi/admin/admin/src/translations/uk.json');
const en = require('./node_modules/@strapi/admin/admin/src/translations/en.json');
function findMissingItems(json1, json2) {
  const missingInJson1 = {};
  const missingInJson2 = {};

  for (const key in json1) {
    if (!json2.hasOwnProperty(key)) {
      missingInJson2[key] = json1[key];
    }
  }

  for (const key in json2) {
    if (!json1.hasOwnProperty(key)) {
      missingInJson1[key] = json2[key];
    }
  }

  return { missingInJson1, missingInJson2 };
}

const json1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const json2 = {
  key1: "value1",
  key4: "value4",
  key5: "value5",
};

const result = findMissingItems(ua, en);
console.log("Missing in json1:", result.missingInJson1);
console.log("Missing in json2:", result.missingInJson2);