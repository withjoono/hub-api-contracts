/** 게시판 */
export interface Board {
    id: number;
    name: string;
    permission: string;
}
/** 게시글 */
export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    isEmphasized: boolean;
    boardId?: number;
    memberId?: string;
}
/** 댓글 */
export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    postId?: number;
    memberId?: string;
}
/** 게시글 목록 응답 */
export interface PostListResponse {
    posts: Post[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=board.d.ts.map