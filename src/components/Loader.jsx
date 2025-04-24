

import spinner from '../assets/spinner.gif'; // Relative path to the spinner.gif file
const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" className="spinner-img" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
