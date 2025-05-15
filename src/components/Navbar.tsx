import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <div className="absolute min-w-screen flex justify-between items-center p-4">
            <p>justsell</p>
            <ThemeSwitcher />
        </div>
    )
}