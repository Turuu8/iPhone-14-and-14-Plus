import { Navigation, Main, Footer } from "./component";
import { CustomTheme } from "./theme/CustomTheme";

function App() {
  return (
    <>
      <CustomTheme>
        <Navigation />
        {/* <Main /> */}
        <Footer />
      </CustomTheme>
    </>
  );
}

export default App;
