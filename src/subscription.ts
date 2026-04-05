// =====================================================
// Hub API Contracts — 구독 (Subscription) 타입
// =====================================================

/** Hub 앱 정보 */
export interface HubApp {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  appUrl?: string;
  isActive: boolean;
  pricing?: Record<string, unknown>;
  features?: Record<string, unknown>;
  sortOrder: number;
}

/** 구독 상태 */
export type SubscriptionStatus = 'active' | 'expired' | 'cancelled';
export type SubscriptionPlan = 'free' | 'premium' | 'enterprise';

/** 앱 구독 정보 */
export interface AppSubscription {
  id: number;
  memberId: string;
  appId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startedAt?: string;
  expiresAt?: string;
  features?: Record<string, unknown>;
  usageCount: number;
  usageLimit?: number;
  autoRenew: boolean;
}

/** 구독 목록 응답 */
export interface SubscriptionListResponse {
  subscriptions: AppSubscription[];
}
