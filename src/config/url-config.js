export const urlConfig = function() {
    const baseURL_GIT = 'http://my-json-server.typicode.com/abhimanyu1717/employeeFeedBackDB/';
    const baseURL_Local = 'http://localhost:4000';
    const baseURL = baseURL_Local;
    return {
        'empFeedBack': baseURL+'/employeesfeedback',
        'login': baseURL+'/login'
    };
}