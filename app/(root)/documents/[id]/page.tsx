import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Document = () => {
  return (
    <div>
      <Editor />
    </div>
  )
}

export default Document
