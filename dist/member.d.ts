/** 회원 타입 종류 */
export type MemberType = 'student' | 'teacher' | 'parent' | 'academy';
/** 회원 기본 정보 (GET /auth/me) */
export interface MemberProfile {
    id: string;
    email: string;
    roleType: string;
    phone: string;
    ckSms: boolean;
    ckSmsAgree: boolean;
    nickname?: string;
    memberType: MemberType;
    profileImageUrl?: string;
    providerType?: string;
    oauthId?: string;
    firebaseUid?: string;
    userTypeCode?: string;
    userTypeDetailCode?: string;
    regYear?: number;
    regMonth?: string;
    regDay?: string;
    createDt?: string;
    updateDt?: string;
}
/** 학생 프로필 */
export interface StudentProfile {
    memberId: string;
    schoolCode?: string;
    schoolName?: string;
    schoolLocation?: string;
    schoolType?: string;
    schoolLevel?: string;
    grade?: number;
}
/** 선생님 프로필 */
export interface TeacherProfile {
    memberId: string;
    schoolLevel?: string;
    subject?: string;
}
/** 학부모 프로필 */
export interface ParentProfile {
    memberId: string;
    parentType?: string;
    child1SchoolLevel?: string;
    child1Grade?: string;
    child2SchoolLevel?: string;
    child2Grade?: string;
}
/** 학원 프로필 */
export interface AcademyProfile {
    memberId: string;
    academyName?: string;
    schoolLevel?: string;
    subject?: string;
}
/** /auth/me 응답 — 회원 정보 + 프로필 */
export interface MemberMeResponse extends MemberProfile {
    studentProfile?: StudentProfile;
    teacherProfile?: TeacherProfile;
    parentProfile?: ParentProfile;
    academyProfile?: AcademyProfile;
}
//# sourceMappingURL=member.d.ts.map