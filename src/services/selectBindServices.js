editviewapp.factory('SelectBindService', ["$http", function (http) {
    return {
        countrySelect: function (obj) {
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function (dependencyVal) {
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal } });
        },
        districtSelect: function (dependencyVal1) {
            alert(dependencyVal1);
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "distric", dependencyValue: dependencyVal1} });
        },
        citySelect: function (dependencyVal2) {
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "city", dependencyValue: dependencyVal2} });
        },
        EducationCatgory: function (dependencyVal2) {
            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "", dependencyValue: ""} });
        },
        EducationGroup: function (dependencyVal2) {
            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationGroup", dependencyValue: dependencyVal2} });
        },
        EducationSpecialisation: function (dependencyVal2) {
            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationSpeacialisation", dependencyValue: dependencyVal2} });
        },
        ProfessionCatgory: function () {
            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionCategory", dependencyValue: ""} });
        },
        ProfessionGroup: function () {
            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "", dependencyValue: ""} });
        },
        ProfessionSpecialisation: function (dependencyVal2) {
            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionGroup", dependencyValue: dependencyVal2} });
        }
    }
}]);