interface SeedProduct {
    description: string;
    images: string[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
}
type ValidTypes = 'cards';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "tarjeta de navidad.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'cards',
            tags: ['navidad'],
            title: "tarjeta de cumple.",
        },
        {
            description: "tarjeta de navidad.",
            images: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],
           
            slug: "men_quilted_shirt_jacket",
            type: 'cards',
            tags: ['navidad'],
            title: "tarjeta de cumple.",
        },
        
        {
            description: "tarjeta de navidad.",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'cards',
            tags: ['navidad'],
            title: "tarjeta de cumple.",
        },

        {
            description: "tarjeta de cumple.",
            images: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],
            slug: "men_turbine_long_sleeve_tee",
            type: 'cards',
            tags: ['cumple'],
            title: "tarjeta de cumple.",
        },
        {
            description: "tarjeta de cumple.",
            images: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],
            slug: "men_turbine_short_sleeve_tee",
            type: 'cards',
            tags: ['cumple'],
            title: "tarjeta de cumple.",
        },
        {
            description: "tarjeta de cumple.",
            images: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],
            slug: "men_cybertruck_owl_tee",
            type: 'cards',
            tags: ['cumple'],
            title: "tarjeta de cumple.",
        },
        {
            description: "tarjeta de san valentin.",
            images: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            slug: "men_solar_roof_tee",
            type: 'cards',
            tags: ['shirt'],
            title: "tarjeta de san valentin.",
        },
        {
            description: "tarjeta de san valentin.",
            images: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            slug: "men_let_the_sun_shine_tee",
            type: 'cards',
            tags: ['shirt'],
            title: "tarjeta de san valentin.",
        },
        {
            description: "tarjeta de san valentin.",
            images: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ], 
            slug: "san valentin",
            type: 'cards',
            tags: ['shirt'],
            title: "tarjeta de san valentin.",
        },
        {
            description: "tarjeta de san valentin.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            slug: "san valentin",
            type: 'cards',
            tags: ['shirt'],
            title: "tarjeta de san valentin.",
        },
    ]}