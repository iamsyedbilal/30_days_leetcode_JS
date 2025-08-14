var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj
      .filter(Boolean)
      .map((item) =>
        typeof item === "object" && item !== null ? compactObject(item) : item
      );
  } else if (obj !== null && typeof obj === "object") {
    let newObj = {};
    for (let key in obj) {
      if (Boolean(obj[key])) {
        newObj[key] =
          typeof obj[key] === "object" ? compactObject(obj[key]) : obj[key];
      }
    }
    return newObj;
  }
  return obj;
};
