import './App.css';
import Courses from './components/Courses';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
      <Courses></Courses>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
