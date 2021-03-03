import React from 'react'

const Layout: React.FC = () => {
    const layout1 = () => {
        const component = (
            <div>
                <div>
                    <div className="flex flex-wrap">
                        <div className="md:w-3/5 md:pr-4">
                            <img
                                src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                                width="100%"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-2/5 sm:mt-4">
                            <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                            <div className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                                iaculis odio a finibus. Curabitur finibus libero ac turpis
                                imperdiet, sit amet laoreet dolor consequat. Suspendisse velit
                                sapien
                            </div>
                            <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="md:w-1/2">
                            <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                            <div className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                                iaculis odio a finibus. Curabitur finibus libero ac turpis
                                imperdiet, sit amet laoreet dolor consequat. Suspendisse velit
                                sapien
                            </div>
                            <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                        </div>
                        <div className="md:w-1/2 sm:mt-4">
                            <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                            <div className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                                iaculis odio a finibus. Curabitur finibus libero ac turpis
                                imperdiet, sit amet laoreet dolor consequat. Suspendisse velit
                                sapien
                            </div>
                            <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout2 = () => {
        const component = (
            <div className="flex flex-wrap">
                <div className="md:w-3/5 md:pr-4">
                    <div>
                        <img
                            src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                            width="100%"
                            loading="lazy"
                            className="object-cover md:pr-8"
                        />
                    </div>

                    <div className="md:mt-4">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <div>
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                    <div className="md:mt-4">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout3 = () => {
        const component = (
            <div>
                <div className="flex flex-wrap">
                    <div className="md:w-2/5 md:pr-4">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                    <div className="md:w-3/5">
                        <img
                            src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="md:w-1/2">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                    <div className="md:w-1/2 sm:mt-4">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout4 = () => {
        const component = (
            <div className="flex flex-wrap h-full">
                <div className="md:w-1/3 md:pr-4">
                    <img
                        src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                        width="100%"
                        loading="lazy"
                        className="object-cover"
                    />
                </div>
                <div className="md:w-1/3  md:pr-4">
                    <div>
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <div>
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const random = () => {
        const min = 1
        const max = 4
        const randomResult = Math.floor(Math.random() * (max - min + 1)) + min
        return randomResult
    }

    const choose = () => {
        const randomResult = random()

        let result
        if (randomResult) {
            result = selectLayout(randomResult)
        }

        return result
    }

    const selectLayout = (randomResult: number) => {
        let component = <div />
        switch (randomResult) {
            case 1:
                component = layout1()
                break
            case 2:
                component = layout2()
                break
            case 3:
                component = layout3()
                break
            case 4:
                component = layout4()
                break
            default:
                component = layout1()
                break
        }
        return component
    }

    return (
        <div>
            {typeof window === 'undefined' ? (
                ''
            ) : (
                <div>
                    <div className="border-b border-black-50 font-bold text-2xl mb-6">Section</div>
                    {choose()}
                </div>
            )}
        </div>
    )
}

export default Layout
