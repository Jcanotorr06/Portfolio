import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ScrollAnimation from 'react-animate-on-scroll'

const Loading = () =>{
    return(
        <ScrollAnimation animateIn="fadeIn">
            <div className="min-h-screen min-w-screen grid place-items-center">
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={30000}
                />
            </div>
        </ScrollAnimation>
        
    )
}

export default Loading