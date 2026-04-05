// =====================================================
// Hub API Contracts — SSO 타입
// =====================================================

/** SSO 코드 생성 요청 */
export interface SsoGenerateCodeRequest {
  targetService: string;
}

/** SSO 코드 생성 응답 */
export interface SsoCodeResponse {
  code: string;
  expiresIn: number;
}

/** SSO 코드 검증 요청 */
export interface SsoVerifyCodeRequest {
  code: string;
  serviceId: string;
}

/**
 * SSO 코드 검증 응답 — LoginResponse와 동일
 * (auth.ts에서 LoginResponse를 그대로 사용)
 */
