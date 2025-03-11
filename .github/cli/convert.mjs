function convertEnum(type, value) {
  return type[value] || null;
}

export { convertEnum };
