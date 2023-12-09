import React from 'react';
import './App.css';
import MemeGallery from './components/MemeGallery';
import MemeForm from './components/MemeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 mx-auto">
                        MemeGen
                    </span>
                </div>
            </nav>
            <div className="container my-4">
                <MemeForm />
                <MemeGallery />
            </div>
        </div>
    );
}

export default App;
