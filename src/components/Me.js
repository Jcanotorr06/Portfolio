import Carrousel from './Carrousel'

const Me = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-1 min-w-screen z-10">
            <Carrousel/>
            <div className="aboutInfo px-10 self-center">
                <h5 className="text-subtitle font-subtitle">About Me</h5>
                <h2 className="font-title text-title text-7xl">Hey, I'm Joseph</h2>
                <div>
                    <p className="text-subtitle font-body text-2xl mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien tempor commodo velit est adipiscing lectus. Mus
                        consequat laoreet amet tristique adipiscing elit.
                        Pellentesque purus amet, donec varius aliquam tempus mi.
                    </p>
                    <p className="text-subtitle font-body text-2xl">
                        Duis massa, egestas id enim, ac vel amet, at facilisis.
                        Accumsan rhoncus nisl, mauris enim sed justo vel. Ut feugiat
                        consectetur eleifend malesuada. Nunc urna aliquam dolor
                        dictumst mauris, vel. Enim curabitur lectus sit cras sed. Nisi
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Me
