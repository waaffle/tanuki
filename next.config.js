module.exports = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "kcdn.tanuki.ru",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "tanukifamily.ru",
                port: "",
                pathname: "**",
            },
        ],
    },
};