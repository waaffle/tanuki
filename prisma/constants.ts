import { Feature } from "@prisma/client"

const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const categories = [
    {
        name: 'Роллы',
    },
    {
        name: 'Суши',
    },
    {
        name: 'Сашими',
    },
    {
        name: 'Сеты',
    },
    {
        name: 'Дим-самы',
    },
    {
        name: 'Веган-меню',
    },
    {
        name: 'Закуски',
    },
    {
        name: 'Салаты',
    },
    {
        name: 'Супы',
    },
    {
        name: 'Горячее',
    },
    {
        name: 'Десерты',
    },
    {
        name: 'Моджи',
    },
    {
        name: 'Детское',
    },
    {
        name: 'Напитки',
    },
    {
        name: 'Не еда',
    },
    {
        name: 'Соусы',
    }
]

export const subcategories = [
    {
        name: "Все",
        categoryId: 1
    },
    {
        name: "Роллы с лососем",
        categoryId: 1
    },
    {
        name: "Роллы запеченые",
        categoryId: 1
    },
    {
        name: "Роллы в темпуре",
        categoryId: 1
    },
    {
        name: "Роллы с креветками",
        categoryId: 1
    },
    {
        name: "Роллы Филадельфия",
        categoryId: 1
    },
    {
        name: "Роллы Острые",
        categoryId: 1
    },
    {
        name: "Роллы с угрем",
        categoryId: 1
    },
    {
        name: "Роллы с крабом",
        categoryId: 1
    },
    {
        name: "Роллы Калифорния",
        categoryId: 1
    },
    {
        name: "Роллы вегетарианские",
        categoryId: 1
    },

    {
        name: "Все",
        categoryId: 2
    },
    {
        name: "Острые суши",
        categoryId: 2
    },
    {
        name: "Суши",
        categoryId: 2
    },
    {
        name: "Гункан",
        categoryId: 2
    },

    {
        name: "Все",
        categoryId: 7
    },
    {
        name: "Спринг роллы",
        categoryId: 7
    },

    {
        name: "Все",
        categoryId: 8
    },
    {
        name: "Салаты",
        categoryId: 8
    },

    {
        name: "Все",
        categoryId: 10
    },
    {
        name: "Бургеры",
        categoryId: 10
    },
    {
        name: "Рис",
        categoryId: 10
    },
    {
        name: "Шашлык из морепродуктов",
        categoryId: 10
    },
    {
        name: "Лапша",
        categoryId: 10
    },
]

export const products = [
    {
        name: "Ролл Криспи тартар",
        description: "креветки, тунец, огурец, лук фри, сыр, воздушный рис, трюфельный соус, 6 шт.",
        imageUrl: '../public/assets/images/products/krispi_tartar.jpg',
        price: randomNumber(500, 800),
        likes: randomNumber(100, 3000),
        weight: randomNumber(105, 235),
        proteins: randomNumber(5, 30),
        fats: randomNumber(10, 20),
        carbs: randomNumber(30, 52),
        kcal: randomNumber(300, 700),
        features: [Feature.new],
        categoryId: 1,
        subcategories: {
            connect: [{ id: 1 }, { id: 5 }]
        },
    },
    {
        name: "Ролл Хрустящий гребешок",
        description: "гребешок, авокадо, воздушный рис, соус майо юдзу, 6 шт.",
        imageUrl: '../public/assets/images/products/hrust_grebeshok.jpg',
        price: randomNumber(500, 800),
        likes: randomNumber(100, 3000),
        weight: randomNumber(105, 235),
        proteins: randomNumber(5, 30),
        fats: randomNumber(10, 20),
        carbs: randomNumber(30, 52),
        kcal: randomNumber(300, 700),
        features: [Feature.new],
        categoryId: 1,
        subcategories: {
            connect: [{ id: 1 }]
        },
    },
    {
        name: "Ролл Пламенный лосось",
        description: "креветки темпура, лосось, огурец, воздушный рис, соусы спайси и унаги, 6 шт.",
        imageUrl: '../public/assets/images/products/plam_losos.jpg',
        price: randomNumber(500, 800),
        likes: randomNumber(100, 3000),
        weight: randomNumber(105, 235),
        proteins: randomNumber(5, 30),
        fats: randomNumber(10, 20),
        carbs: randomNumber(30, 52),
        kcal: randomNumber(300, 700),
        features: [Feature.new],
        categoryId: 1,
        subcategories: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }]
        },
    },

]