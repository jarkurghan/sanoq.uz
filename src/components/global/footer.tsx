export default function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container py-4 text-center text-xs">
                <p>
                    {/* © {new Date().getFullYear()} Number Systems. {t("footer.rights")} */}
                    sanoq.uz {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
