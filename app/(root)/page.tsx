import Header from "@/components/Header";
import {SignedIn, UserButton} from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
    const document = [];
    return (
        <main className="home-container">
            <Header className="sticky left-0 top-0">
                <div className="flex items-center gap-2 lg:gap-4">
                    Notification
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </Header>
            {document.length > 0 ? (
                <div>

                </div>
            ) : (
                <div className="document-list-empty">
                    <Image src="/assets/icons/doc.svg"
                           alt="Documents"
                           width={40}
                           height={40}
                           className="max-auto"
                    />
                </div>
            )}
        </main>
    )
}
export default Page
