import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
