import React from 'react'

const Layout: React.FC<any> = ({ data }: any) => {
    const layout1 = (values: any) => {
        console.log(values)

        const component = (
            <div>
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-4">
                        <img
                            src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div>
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
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
            </div>
        )
        return component
    }

    const layout2 = (values: any) => {
        const component = (
            <div>
                <div className="grid grid-cols-7 gap-5">
                    <div className="col-span-4">
                        <div className="w-10/12">
                            <img
                                src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                                width="100%"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4">
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
                    <div className="col-span-3">
                        <div>
                            <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                            <div className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                                iaculis odio a finibus. Curabitur finibus libero ac turpis
                                imperdiet, sit amet laoreet dolor consequat. Suspendisse velit
                                sapien
                            </div>
                            <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                        </div>
                        <div className="mt-5">
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

    const layout3 = (values: any) => {
        const component = (
            <div>
                <div className="grid grid-cols-7 gap-5">
                    <div className="col-span-2">
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
                    <div className="col-span-5">
                        <img
                            src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div>
                        <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                        <div className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                            iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet,
                            sit amet laoreet dolor consequat. Suspendisse velit sapien
                        </div>
                        <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                    </div>
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
            </div>
        )
        return component
    }

    const layout4 = (values: any) => {
        const component = (
            <div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="h-full">
                        <img
                            src="https://i.ibb.co/vd89ZtB/Rectangle-8.png"
                            width="100%"
                            style={{ height: '100% !important' }}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div>
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
                    <div>
                        <div>
                            <div className="font-bold text-lg">Lorem Ipsum Dolor sit amet</div>
                            <div className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
                                iaculis odio a finibus. Curabitur finibus libero ac turpis
                                imperdiet, sit amet laoreet dolor consequat. Suspendisse velit
                                sapien
                            </div>
                            <div className="text-black-50 text-sm mt-2">3 hours ago</div>
                        </div>
                        <div className="mt-4">
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

    const random = () => {
        const min = 1
        const max = 4
        const randomResult = Math.floor(Math.random() * (max - min + 1)) + min

        return randomResult
    }

    const selectLayout = (data: any) => {
        const randomResult = random()
        let component = <div />

        switch (randomResult) {
            case 1:
                component = layout1(data)
                break
            case 2:
                component = layout2(data)
                break
            case 3:
                component = layout3(data)
                break
            case 4:
                component = layout4(data)
                break
            default:
                component = layout1(data)
                break
        }
        return component
    }

    return (
        <div>
            <div className="border-b border-black-50 font-bold text-2xl mb-6">
                {data.sectionName}
            </div>
            <div>{selectLayout(data.data)}</div>
        </div>
    )
}

export default Layout
