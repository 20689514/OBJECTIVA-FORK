var baseUrl = 'http://127.0.0.1:8000/api';
export const environment = {
    production: false,

    // USER
    userUrl: `${baseUrl}/user`,
    userUpdateUrl: `${baseUrl}/update`,
    // LOGIN & REGISTER
    loginUrl: `${baseUrl}/login`,
    registerUrl: `${baseUrl}/register`,

    // LESSON PROGRESS
    lessonProgressUrl: `${baseUrl}/lesson-progress`,

    // QUIZ
    quizUrl: `${baseUrl}/quiz-scores`,
};
