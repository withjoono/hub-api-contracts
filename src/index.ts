// =====================================================
// Hub API Contracts — 통합 Export
//
// 사용법:
//   import { ApiResponse, LoginResponse } from 'hub-api-contracts';
// =====================================================

// 공통 (래퍼, 페이지네이션)
export type {
  ApiResponse,
  ApiErrorResponse,
  PaginationParams,
  PaginationMeta,
  PaginatedResponse,
} from './common';

// 인증
export type {
  LoginWithEmailRequest,
  LoginWithSocialRequest,
  RegisterWithEmailRequest,
  RegisterWithSocialRequest,
  FirebaseLoginRequest,
  FirebaseRegisterRequest,
  RefreshTokenRequest,
  SendSignupCodeRequest,
  VerifyCodeRequest,
  VerifyTokenRequest,
  PasswordResetRequestBody,
  PasswordResetBody,
  LoginResponse,
  VerifyTokenResponse,
  ResetTokenResponse,
} from './auth';

// 회원
export type {
  MemberType,
  MemberProfile,
  StudentProfile,
  TeacherProfile,
  ParentProfile,
  AcademyProfile,
  MemberMeResponse,
} from './member';

// 구독
export type {
  HubApp,
  SubscriptionStatus,
  SubscriptionPlan,
  AppSubscription,
  SubscriptionListResponse,
} from './subscription';

// 게시판
export type {
  Board,
  Post,
  Comment,
  PostListResponse,
} from './board';

// SSO
export type {
  SsoGenerateCodeRequest,
  SsoCodeResponse,
  SsoVerifyCodeRequest,
} from './sso';
export * from './schoolrecord';
