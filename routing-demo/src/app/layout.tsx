export const metadata = {
    title: "Home Next.js",
    description: "Welcome to the home page"
}

export default function RootLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}