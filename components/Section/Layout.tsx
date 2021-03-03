import React from 'react'

const Layout: React.FC<any> = ({ data }: any) => {
    const layout1 = (values: any) => {
        console.log(values)

        const component = (
            <div>
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-4">
                        <img
                            src={values[0].image}
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="font-bold text-lg">{values[0].title}</div>
                        <div className="text-sm mt-2">{values[0].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[0].time}</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div>
                        <div className="font-bold text-lg">{values[1].title}</div>
                        <div className="text-sm mt-2">{values[1].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[1].time}</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{values[2].title}</div>
                        <div className="text-sm mt-2">{values[2].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[2].time}</div>
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
                                src={values[0].image}
                                width="100%"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="font-bold text-lg">{values[0].title}</div>
                            <div className="text-sm mt-2">{values[0].details}</div>
                            <div className="text-black-50 text-sm mt-2">{values[0].time}</div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div>
                            <div className="font-bold text-lg">{values[1].title}</div>
                            <div className="text-sm mt-2">{values[1].details}</div>
                            <div className="text-black-50 text-sm mt-2">{values[1].time}</div>
                        </div>
                        <div className="mt-5">
                            <div className="font-bold text-lg">{values[2].title}</div>
                            <div className="text-sm mt-2">{values[2].details}</div>
                            <div className="text-black-50 text-sm mt-2">{values[2].time}</div>
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
                    <div className="col-span-3">
                        <div className="font-bold text-lg">{values[0].title}</div>
                        <div className="text-sm mt-2">{values[0].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[0].time}</div>
                    </div>
                    <div className="col-span-4">
                        <img
                            src={values[0].image}
                            width="100%"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div>
                        <div className="font-bold text-lg">{values[1].title}</div>
                        <div className="text-sm mt-2">{values[1].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[1].time}</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{values[2].title}</div>
                        <div className="text-sm mt-2">{values[2].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[0].time}</div>
                    </div>
                </div>
            </div>
        )
        return component
    }

    const layout4 = (values: any) => {
        const component = (
            <div className="grid grid-cols-3 gap-5">
                <div className="h-full">
                    <img
                        src={values[0].image}
                        width="100%"
                        style={{ height: '100% !important' }}
                        loading="lazy"
                        className="object-cover"
                    />
                </div>
                <div>
                    <div>
                        <div className="font-bold text-lg">{values[0].title}</div>
                        <div className="text-sm mt-2">{values[0].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[0].time}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="font-bold text-lg">{values[1].title}</div>
                        <div className="text-sm mt-2">{values[1].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[1].time}</div>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-lg">{values[2].title}</div>
                        <div className="text-sm mt-2">{values[2].details}</div>
                        <div className="text-black-50 text-sm mt-2">{values[2].time}</div>
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
        console.log(randomResult)
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
