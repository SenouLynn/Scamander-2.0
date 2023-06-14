type Pack = {
  label: string; // Display name
  location: string; //Relational id (tree node)
  styleId: string; //Style id (component)

  subComponents: Pack[]; //Stored location/style pairs, indexed
  children: [string | undefined]; //props.children (react)

  styles: {}; //Final styles destination
  logic: {}; //Storage for config function

  buildSelf: () => null; //assemble self
  getData: () => null; //hook
  render: () => null; // render self
};

//To do types: **IMPORTANT**
//  - styles
//  - logic
//  - getData
//      - Last priority
//  - render
//      - Wait until Theme Context is established
//  - buildSelf
//      - Wait until Theme Context is established
