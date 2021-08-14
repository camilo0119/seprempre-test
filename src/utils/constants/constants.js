const langs = {
    EN: {
        product: {
            priceLegend: 'STARTING AT',
            colorChoose: 'Choose your finish.',
            warrantyCoverage: 'Would you like to add extended warranty coverage?.',
            specifications: 'Specifications.'
        },
        footer: {
            widget1: {
                title: 'Free Shipping',
                content: 'Get 2-day free shipping anywhere in North America.'
            },
            widget2: {
                title: '2 years warranty',
                content: `If anything goes wrong in the first two years, we'll replace it for free.`
            },
            legendTotal: 'Need financing? Learn more',
            buttonBuy: 'Buy Now'
        }
    }
}

const currentLanguage = langs.EN

export const constants = {
    ...currentLanguage
}