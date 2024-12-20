import { Button, CardHeader, CardTitle } from "../../../shared/ui"
import { Plus } from "lucide-react"

interface PostSearchHeaderProps {
  handleDialog: () => void
}

const PostSearchHeader = ({ handleDialog }: PostSearchHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={handleDialog}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
      </CardTitle>
    </CardHeader>
  )
}

export default PostSearchHeader
