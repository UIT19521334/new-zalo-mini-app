import Colors from '../../constant/colors'
import React, { useState } from 'react'
import { Header, Page } from 'zmp-ui'

function ReadMoreText({ text, maxLength }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine whether to show full text or truncated
    const displayText = isExpanded ? text : text.slice(0, maxLength);

    return (
        <div className="text-gray-900 ">
            <p>
                {displayText}
                {text.length > maxLength && !isExpanded && '...'}
            </p>
            {text.length > maxLength && (
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:underline"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
}

const NewDetailPage = () => {
    const longText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius euismod felis, non pellentesque est ullamcorper nec. Phasellus varius placerat purus, et commodo justo cursus in. Proin sagittis laoreet ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed non orci ac quam ullamcorper interdum vel non magna. Praesent convallis odio id orci facilisis, ac auctor sapien facilisis. Nulla facilisi. Fusce at tincidunt ligula, a sagittis nunc. Vivamus et ligula ligula. Nulla porttitor turpis in nulla sollicitudin, id commodo mi scelerisque.';
    return (
        <Page className='page'>
            <Header title="Hot Updates" textColor={Colors.PRIMARY} style={{ textAlign: 'center' }} />
            <div className="relative w-full h-64 mt-12">
                <img
                    src="https://www.japfa.com/assets/filemanager/07062401-Toba-Tilapia_at-FairPrice.jpg"
                    alt="Example"
                    className="object-cover w-full h-full rounded-2xl"
                />
            </div>
            <div className='my-2 text-lg font-serif	text-orange-500'>Monday, 10 May 2021</div>
            <div className='my-2 text-xl font-serif font-semibold'>
                Japfa launches TOBA TILAPIA at FairPrice Singapore and promotes Lake Toba tourism
            </div>
            <div className="pt-1">
                <ReadMoreText text={longText} maxLength={200} />
            </div>
        </Page>
    )
}

export default NewDetailPage