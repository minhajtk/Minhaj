import "./App.css";
import User from "./Components/User";
import Card from "./Components/Card";
import Layout from "./Components/Layout";
import Button from "./Components/Button";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Props</h1>

      <User name="Minhaj" age={22} role="Admin" />
      <hr />

      {/* CHILDREN + NESTING JSX */}
      <Card title="Dashboard">
        <p>Welcome to your dashboard</p>
        <p>You can manage your profile here</p>
        <Button text="Update Profile" />
      </Card>

      <hr />

      {/* NESTING JSX WITH DESTRUCTURED PROPS */}
      <Layout heading="Main Layout">
        <section>
          <h3>Section 1</h3>
          <p>This is the first section</p>
        </section>

        <section>
          <h3>Section 2</h3>
          <p>This is the second section</p>
        </section>
      </Layout>
    </div>
  );
}

export default App;
