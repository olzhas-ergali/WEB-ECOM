import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
// import { useSelector } from "react-redux";
// import { createStore } from "redux";
// import allReducers from "./redux/reducers";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import Feedback from "./components/Feedback"
// import { deleteMember, addMember, editMember } from '../../store/aboutReducer';
// import AddMember from './components/component/AddMember';
// import ListMember from './components/component/ListMember';

function App() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/anime/:category" element={<AnimeDetail />} />
          <Route exact path="/about" element={< About />} />
          <Route exact path="/feedback" element={<ContactForm />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
