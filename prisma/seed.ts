import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client'
import { categories, products, subcategories } from './constants';
import { Feature } from '@prisma/client';

const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User", "Category", "Subcategory", "Product", "Cart", "CartItem" RESTART IDENTITY CASCADE`
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Yana",
                email: "susljakovajana@yandex.ru",
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: "Admin",
                email: "admin@test.ru",
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN'
            },
        ]
    });
    await prisma.category.createMany({
        data: categories
    });
    await prisma.subcategory.createMany({
        data: subcategories
    });
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "111111"
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "222222"
            },
        ],
    });
    await prisma.product.create({
        data: products[0]
    });
    await prisma.product.create({
        data: products[1]
    });
    await prisma.product.create({
        data: products[2]
    });

    await prisma.cartItem.create({
        data: {
            cartId: 1,
            productId: 1,
            quantity: 2,
        }
    });
}

async function main() {
    try {
        await down();
        await up();
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })