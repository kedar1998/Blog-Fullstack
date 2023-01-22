import { useAppcontext } from "./state/Context";


function App() {

  const {count, add} = useAppcontext()

  return (
    <div>
      app
      <div>
        {count}
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
}

export default App;
