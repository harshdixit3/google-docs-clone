
import {Editor} from "@/components/editor/Editor";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";


const Page = () => {
    return (
        <div>
            <Header>
               <div className="flex w-fit items-center justify-center gap-2">
                   <p className="document-title">share</p>
               </div>
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>

            <Editor  />
        </div>
    )
}
export default Page
