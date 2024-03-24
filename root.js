
function Hello() {
    return <h1>Hello</h1>;
  }

  const container = document.getElementById("root1");
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />);
