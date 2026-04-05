/**
 * 백엔드 성공 응답 래퍼
 *
 * 백엔드의 SuccessResponseInterceptor가 모든 응답을 이 형태로 감쌉니다.
 * 프론트엔드에서 API 호출 시 이 타입을 사용하면:
 *   const res = await authClient.post<ApiResponse<LoginResponse>>('/auth/login/email', data);
 *   res.data.data.accessToken  ← 자동완성 + 빌드 시 검증
 */
export interface ApiResponse<T> {
    success: true;
    data: T;
}
/**
 * 백엔드 에러 응답
 * NestJS의 기본 에러 필터가 반환하는 형식
 */
export interface ApiErrorResponse {
    success: false;
    statusCode: number;
    message: string | string[];
    error: string;
}
/**
 * 페이지네이션 요청 파라미터
 */
export interface PaginationParams {
    page?: number;
    limit?: number;
}
/**
 * 페이지네이션 응답 메타 정보
 */
export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
/**
 * 페이지네이션된 응답
 */
export interface PaginatedResponse<T> {
    items: T[];
    meta: PaginationMeta;
}
//# sourceMappingURL=common.d.ts.map