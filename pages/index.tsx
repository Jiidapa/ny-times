import React from 'react'
import IndexApp from '@features/IndexPage'

const IndexPage: React.FC = (props: any) => {
    return <IndexApp props={props} />
}

export default IndexPage

export async function getStaticProps() {
    const sectionA = {
        sectionName: 'Technology',
        data: [
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: 'A) Lorem Ipsum Dolor sit amet',
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            },
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: 'B) Lorem Ipsum Dolor sit amet',
                details:
                    'B) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            },
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: 'C) Lorem Ipsum Dolor sit amet',
                details:
                    '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            }
        ]
    }

    const sectionB = {
        sectionName: 'U.S.',
        data: [
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: '1) Lorem Ipsum Dolor sit amet',
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            },
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: '2) Lorem Ipsum Dolor sit amet',
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            },
            {
                image: 'https://i.ibb.co/vd89ZtB/Rectangle-8.png',
                title: '3) Lorem Ipsum Dolor sit amet',
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper iaculis odio a finibus. Curabitur finibus libero ac turpis imperdiet, sit amet laoreet dolor consequat. Suspendisse velit sapien',
                time: '3 hours ago'
            }
        ]
    }

    const groupData = [sectionA, sectionB]
    return {
        props: { groupData } // will be passed to the page component as props
    }
}
