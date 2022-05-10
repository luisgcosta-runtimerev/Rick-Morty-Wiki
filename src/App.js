import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Location from './pages/Location';
import CardDetails from './components/Card/CardDetails';

const theme = createTheme({});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/episodes" element={<Episodes />} />
                    <Route path="/location" element={<Location />} />

                    <Route path="/:id" element={<CardDetails />} />
                    <Route path="/episodes/:id" element={<CardDetails />} />
                    <Route path="/location/:id" element={<CardDetails />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
