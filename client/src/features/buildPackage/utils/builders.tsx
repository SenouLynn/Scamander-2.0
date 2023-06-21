//This is how the entire system communicates with itself. Do not disturb or everything will break.
export const buildPack: buildPackFn = (pack) => {
  return {
    label: "", // Display name
    location: "", //Relational id (tree node)
    styleId: "", //Style id (component)

    subComponents: [], //Stored location/style pairs, indexed
    children: [undefined], //props.children (react)

    styles: {}, //Final styles destination
    logic: {}, //Storage for config function

    buildSelf: () => null, //assemble self
    getData: () => null, //hook
    render: () => null, // render self
    ...pack,
  };
};
