import Outlet from "./routes/components/Outlet";

//Note: App serves as main outlet for all pages
//- Page configs are assembled, make available through field
//- Pass pages + sub routes into browser router, they handle how they do stuff
function App() {
  return (
    <div role="App">
      <Outlet />
    </div>
  );
}

export default App;
