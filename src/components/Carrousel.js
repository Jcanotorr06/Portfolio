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
            draggable={false}
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
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/commerce.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/css.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/express.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/fastify.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/git.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/html.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/js.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/mongo.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/nextjs.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/node.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/pwa.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/react.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/strapi.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/tailwind.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
                <img
                    src="https://raw.githubusercontent.com/Jcanotorr06/images/main/Skills/ts.png"
                    style={{
                    display: 'block',
                    maxHeight: '50%',
                    margin: 'auto',
                    maxWidth: '100%',
                    padding: '1rem'
                    }}
                />
            </Carousel>
        </div>
    )
}

export default Tags