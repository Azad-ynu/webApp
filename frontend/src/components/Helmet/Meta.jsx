import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'eAgro电子农业',
    description: 'Web Application Undergraduate Thesis Design By: MD ABUL KALAM AZAD RAJU-YNU ',
    keywords: 'Electronic Information Engineering'
}

export default Meta
