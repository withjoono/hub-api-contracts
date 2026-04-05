export interface SchoolRecordSubjectLearning {
    id: number;
    memberId: string;
    grade: string | null;
    semester: string | null;
    mainSubjectCode: string | null;
    mainSubjectName: string | null;
    subjectCode: string | null;
    subjectName: string | null;
    unit: string | null;
    rawScore: string | null;
    subSubjectAverage: string | null;
    standardDeviation: string | null;
    achievement: string | null;
    studentsNum: string | null;
    ranking: string | null;
    etc: string | null;
    detailAndSpecialty: string | null;
}
export interface SchoolRecordSelectSubject {
    id: number;
    memberId: string;
    grade: string | null;
    semester: string | null;
    mainSubjectCode: string | null;
    mainSubjectName: string | null;
    subjectCode: string | null;
    subjectName: string | null;
    unit: string | null;
    rawScore: string | null;
    subSubjectAverage: string | null;
    achievement: string | null;
    studentsNum: string | null;
    achievementa: string | null;
    achievementb: string | null;
    achievementc: string | null;
    etc: string | null;
    detailAndSpecialty: string | null;
}
export interface SchoolRecordAttendance {
    id: number;
    memberId: string;
    grade: string | null;
    classDays: number | null;
    absentDisease: number | null;
    absentUnrecognized: number | null;
    absentEtc: number | null;
    lateDisease: number | null;
    lateUnrecognized: number | null;
    lateEtc: number | null;
    leaveEarlyDisease: number | null;
    leaveEarlyUnrecognized: number | null;
    leaveEarlyEtc: number | null;
    resultDisease: number | null;
    resultUnrecognized: number | null;
    resultEarlyEtc: number | null;
    etc: string | null;
}
export interface SchoolRecordVolunteer {
    id: number;
    memberId: string;
    grade: string | null;
    date: string | null;
    place: string | null;
    activityContent: string | null;
    activityTime: string | null;
    accumulateTime: string | null;
}
export interface SchoolRecordSportArt {
    id: number;
    memberId: string;
}
export interface SchoolRecordCreativeActivity {
    id: number;
    memberId: string;
    grade: string | null;
    activityType: string | null;
    content: string | null;
}
export interface SchoolRecordBehaviorOpinion {
    id: number;
    memberId: string;
    grade: string | null;
    content: string | null;
}
export interface SchoolRecordResponse {
    memberId: string;
    subjectLearnings: SchoolRecordSubjectLearning[];
    selectSubjects: SchoolRecordSelectSubject[];
    attendanceDetails: SchoolRecordAttendance[];
    volunteers: SchoolRecordVolunteer[];
    sportArts: SchoolRecordSportArt[];
    creativeActivities: SchoolRecordCreativeActivity[];
    behaviorOpinions: SchoolRecordBehaviorOpinion[];
}
//# sourceMappingURL=schoolrecord.d.ts.map