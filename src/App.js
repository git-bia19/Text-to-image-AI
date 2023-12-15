import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DescribeBusinessPage from './components/DescribeBusinessPage';
import TargetAudienceSelection from './components/TargetAudienceSelection';
import ColorThemeSelection from './components/ColorThemeSelection';



const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/describe-business" element={<DescribeBusinessPage />} />
        <Route path="/target-audience" element={<TargetAudienceSelection />} />
        <Route path="/color-theme-selection" element={<ColorThemeSelection />} />
    
      </Routes>
    </Router>
  );
};

export default App;
