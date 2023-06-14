# SCAMANDER 2 BABY

Scamander Likely, the intrepid space cowboy has evolved into Scamander Likely the Grundle Pirate.

Scamander Likely's Cool And Fun Design System is no more. This is the future. 

## Brain Dump

- [X] Initial folder structure
- [ ] Port over component builder logic
- [ ] Rebuild className builder logic in tandem with SCSS compile logic.
  **of interest:**
  - classNames package. Handles merge logic, de-duping, clean toggle logic with standard outputs
  - import SCSS builder variables to JS builder source of truth
  - based off the previous, it may be sensible to include a classNames builder feature

- [ ] Port over router logic
- [ ] Initial API folder structure
- [ ] Connection to firebase

## Milestones

Gona try and herd cats here, move stuff forward incrementally (through Test Drive Development). Minimizing distracting side quests, these goals should resolve one step towards achieving the next easiest need.

- [X] Folder structure
- [X] Routing proof of concept
- [X] buildPack tested + ready to use
- [ ] Build InitWrapper
  - Purpose: This is the main point of entry. Address later
    - Provide routes
    - Provide initial projectId
    - Provide initial themeId
    - Hydrate
    - Authorization
    - Initial load state
- [ ] Build Theme Provider
  - Purpose: Main wrapper giving tree access to data it needs to build itself
- [ ] Build out Poopdeck wireframe and navigation
- [ ] Build out state mgmt system
  - Note: Go with Zustand
- [ ] Build out rendering engine
- [ ] Build out className builder engine + SCSS integrations
- [ ] Build out style-to-component mechanism
- [ ] Connect db
  - Note: Look into Prisma and GraphQL. Might be the most readable way of fetching custom data + putting into state
- [ ] Console/Logging/Observability mechanism
  - Purpose: Add visibility to errors, toggle for dev/prod

## Get er' off the ground

To serve dev **Front End**

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
