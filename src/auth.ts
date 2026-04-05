// =====================================================
// Hub API Contracts — 인증 (Auth) 타입
// =====================================================

// ----- 요청 타입 -----

export interface LoginWithEmailRequest {
  email: string;
  password: string;
}

export interface LoginWithSocialRequest {
  socialType: 'naver' | 'google';
  accessToken: string;
}

export interface RegisterWithEmailRequest {
  email: string;
  password: string;
  phone: string;
  nickname?: string;
  memberType: 'student' | 'teacher' | 'parent' | 'academy';
  ckSms: boolean;
  ckSmsAgree: boolean;
  // 학생 전용
  schoolCode?: string;
  schoolName?: string;
  schoolLocation?: string;
  schoolType?: string;
  schoolLevel?: string;
  grade?: number;
  // 선생님 전용
  teacherSchoolLevel?: string;
  teacherSubject?: string;
  // 학부모 전용
  parentType?: string;
  child1SchoolLevel?: string;
  child1Grade?: string;
  // 학원 전용
  academyName?: string;
  academySchoolLevel?: string;
  academySubject?: string;
}

export interface RegisterWithSocialRequest {
  socialType: 'naver' | 'google';
  accessToken: string;
  phone: string;
  nickname?: string;
  memberType: 'student' | 'teacher' | 'parent' | 'academy';
  ckSms: boolean;
  ckSmsAgree: boolean;
  schoolCode?: string;
  schoolName?: string;
  schoolLocation?: string;
  schoolType?: string;
  schoolLevel?: string;
  grade?: number;
  teacherSchoolLevel?: string;
  teacherSubject?: string;
  parentType?: string;
  child1SchoolLevel?: string;
  child1Grade?: string;
  academyName?: string;
  academySchoolLevel?: string;
  academySubject?: string;
}

export interface FirebaseLoginRequest {
  idToken: string;
}

export interface FirebaseRegisterRequest {
  idToken: string;
  phone: string;
  nickname?: string;
  memberType: 'student' | 'teacher' | 'parent' | 'academy';
  ckSms: boolean;
  ckSmsAgree: boolean;
  schoolCode?: string;
  schoolName?: string;
  schoolLocation?: string;
  schoolType?: string;
  schoolLevel?: string;
  grade?: number;
  teacherSchoolLevel?: string;
  teacherSubject?: string;
  parentType?: string;
  child1SchoolLevel?: string;
  child1Grade?: string;
  academyName?: string;
  academySchoolLevel?: string;
  academySubject?: string;
}

export interface RefreshTokenRequest {
  refreshToken?: string;
}

export interface SendSignupCodeRequest {
  email?: string;
  phone: string;
}

export interface VerifyCodeRequest {
  phone: string;
  code: string;
}

export interface VerifyTokenRequest {
  accessToken: string;
}

export interface PasswordResetRequestBody {
  email: string;
  phone: string;
}

export interface PasswordResetBody {
  token: string;
  newPassword: string;
}

// ----- 응답 타입 -----

/** 로그인/회원가입 성공 시 반환되는 토큰 정보 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenExpiry: number;
  activeServices: string[];
}

/** SSO 토큰 검증 결과 */
export interface VerifyTokenResponse {
  valid: boolean;
  memberId?: string;
  email?: string;
  name?: string;
}

/** 비밀번호 재설정 토큰 */
export interface ResetTokenResponse {
  resetToken: string;
}
