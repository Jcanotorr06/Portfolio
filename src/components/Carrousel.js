/* eslint-disable jsx-a11y/alt-text */
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Tags = () =>{
    return(
        <div className="flex items-center p-10 z-10">
            <Carousel
            arrows={false} 
            additionalTransfrom={0} 
            autoPlay 
            autoPlaySpeed={5} 
            infinite 
            slidesToSlide={1}
            customTransition="all 1s linear"
            containerClass="container"
            transitionDuration={1000}
            centerMode={true} 
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                      },
                      items: 1
                    },
                tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 464
                    },
                    items: 1
                }

            }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/640px-MongoDB-Logo.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://www.iexcel-technologies.com/wp-content/uploads/2020/03/rest-api-logo.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%'
                    }}
                />
            </Carousel>
        </div>
    )
}

export default Tags