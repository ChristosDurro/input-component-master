import './App.css';
import Input from './components/Input';

function App() {
    return (
        <div className="container" >
            <nav >
                <ul >
                    <li className="nav-items" > Typography </li>
                    <li className="nav-items" > Grid </li>
                    <li className="nav-items" > Buttons </li>
                    <li className="nav-items active" > Inputs </li>
                </ul>
            </nav>
            <div className="inputs-section" >
                <strong> Inputs </strong>

                <Input />

                <Input error />

                <Input disabled />

                <div className="helper-text-section">


                    <Input helperText="Some interesting text" />

                    <Input helperText="Some interesting text" error />
                </div>

                <div className="icon-section">


                    <Input startIcon id="first-start" />
                    <Input startIcon id="second-start" />
                    <Input startIcon id="third-start" />

                    <Input endIcon id="first-end" />
                    <Input endIcon id="second-end" />
                    <Input endIcon id="third-end" />
                </div>

                <Input value="Text" />

                <div className="size-section">


                    <Input size="sm" />

                    <Input size="md" />

                    <Input size="lg" />
                </div>

                <Input fullWidth />

                <Input multiline row="4" />

                <div className="footer">
                    <p>Created by <a href='https://github.com/ChristosDurro' target="_blank">Christos Durro</a> - devChallenges.io</p>
                </div>
            </div>
        </div>
    );
}

export default App;